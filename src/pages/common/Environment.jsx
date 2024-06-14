import { Label, Select, TextInput } from "flowbite-react";

import { useState } from "react";
import { MultipleInput } from "../../components/common/MultipleInput";
import { HiMail, HiInformationCircle } from "react-icons/hi";
import { VscGistSecret } from "react-icons/vsc";
import { LuCloudCog } from "react-icons/lu";
import axiosInstance from "../../utils/axiosInstance";
import { FormCard } from "../../components/common/FormCard";
import { PageTitle } from "../../components/common/PageTitle";
import { Alert } from "flowbite-react";
import { ProtectedComponent } from "../../components/ProtectedComponent";

import {
  FaPhoneAlt,
  FaUser,
  FaKey,
  FaLink,
  FaRegAddressCard,
} from "react-icons/fa";

export function Environment() {
  const [envs, setEnvs] = useState([
    {
      name: "Production",
      value: "prd",
    },
    {
      name: "Test",
      value: "tst",
    },
  ]);

  const [hookAuths, setHookAuths] = useState([
    {
      name: "No authentication",
      valur: "No authentication",
    },
    {
      name: "Basic Auth (username / password)",
      value: "Basic",
    },
    {
      name: "API key HTTP header (header name / header value)",
      value: "Api key",
    },
    {
      name: "OAuth 2.0 (client ID / client secret)",
      value: "OAuth",
    },
  ]);

  const [environment, setEnvironment] = useState();
  const [hookUrlHeaders, setHookUrlHeaders] = useState([]);
  const [hookCorelations, setHookCorelations] = useState([]);
  const [hookAuthHeaders, setHookAuthHeaders] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", mobile: "" });
  const [keys, setKeys] = useState({
    v4: { backend: "", frontend: "" },
    v5: { backend: "" },
  });
  const [webhook, setWebhook] = useState({
    auth: "",
    url: "",
    identity: "",
    secret: "",
    authUrl: "",
    urlHeaders: {},
    corelations: {},
    authHeaders: {},
  });
  const [redirect, setRedirect] = useState();

  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    axiosInstance
      .post(`/v51/environments`, {
        env: environment,
        redirect,
        keys,
        user,
        webHook: attachMapsToWebhook(),
      })
      .then((res) => {
        handleSucces(res.data);
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setErrors(e.response.data.errors);
        } else {
        }
      });
  };

  function handleSucces(data) {
    const url = window.URL.createObjectURL(new Blob([JSON.stringify(data)]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "environment.json");
    document.body.appendChild(link);
    link.click();
  }

  function attachMapsToWebhook() {
    return {
      ...webhook,
      urlHeaders: convertListToMap(hookUrlHeaders),
      corelations: convertListToMap(hookCorelations),
      authHeaders: convertListToMap(hookAuthHeaders),
    };
  }

  const convertListToMap = (list) => {
    const map = {};
    list.forEach((obj) => {
      map[obj.key] = obj.value;
    });
    return map;
  };

  return (
    <ProtectedComponent>
      <div className="sticky top-4 z-50  p-0">
        {errors.map((error, index) => (
          <Alert
            className="mx-4 mb-4"
            color="warning"
            icon={HiInformationCircle}
            onDismiss={() => setErrors(errors.filter((e) => e !== error))}
          >
            <span className="font-medium">Info alert!</span> {error}
          </Alert>
        ))}
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-transparent px-6 py-8 lg:w-9/12 lg:px-2 lg:py-0">
        <PageTitle title={"Postman Environment Configuration"} />
        <FormCard>
          <div className="mb-2 block">
            <Label htmlFor="environment" value="Select the environment" />
          </div>
          <Select
            value={environment}
            onChange={(event) => {
              setEnvironment(event.target.value);
            }}
            id="environment"
            required
            icon={LuCloudCog}
          >
            <option selected disabled>
              Select an environment
            </option>
            {envs.map((env, index) => (
              <option value={env.value}>{env.name}</option>
            ))}
          </Select>
          <div className="mb-2 block">
            <Label htmlFor="redirect" value="Redirect URL" />
          </div>
          <TextInput
            value={redirect}
            onChange={(event) => {
              setRedirect(event.target.value);
            }}
            id="redirect"
            type="text"
            sizing="md"
            icon={FaLink}
          />
        </FormCard>
        <FormCard>
          <h5>V4</h5>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="v4-backend" value="Back-end API KEY" />
            </div>
            <TextInput
              value={keys.v4.backend}
              onChange={(event) => {
                setKeys({
                  ...keys,
                  v4: { ...keys.v4, backend: event.target.value },
                });
              }}
              id="v4-backend"
              type="text"
              sizing="md"
              icon={FaKey}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="v4-frontend" value="front-end API KEY" />
            </div>
            <TextInput
              value={keys.v4.frontend}
              onChange={(event) => {
                setKeys({
                  ...keys,
                  v4: { ...keys.v4, frontend: event.target.value },
                });
              }}
              id="v4-frontend"
              type="text"
              sizing="md"
              icon={FaKey}
            />
          </div>
        </FormCard>
        <FormCard>
          <h5>V5</h5>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="v5-backend" value="Back-end API KEY" />
            </div>
            <TextInput
              value={keys.v5.backend}
              onChange={(event) => {
                setKeys({
                  ...keys,
                  v5: { ...keys.v5, backend: event.target.value },
                });
              }}
              id="v5-backend"
              type="text"
              sizing="md"
              icon={FaKey}
            />
          </div>
        </FormCard>
        <FormCard>
          <h5>User details</h5>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-name" value="name" />
            </div>
            <TextInput
              value={user.name}
              onChange={(event) => {
                setUser({
                  ...user,
                  name: event.target.value,
                });
              }}
              id="user-name"
              type="text"
              sizing="md"
              icon={FaUser}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-email" value="email" />
            </div>
            <TextInput
              value={user.email}
              onChange={(event) => {
                setUser({
                  ...user,
                  email: event.target.value,
                });
              }}
              id="user-email"
              sizing="md"
              type="email"
              icon={HiMail}
              placeholder="name@example.com"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="user-mobile" value="mobile" />
            </div>
            <TextInput
              value={user.mobile}
              onChange={(event) => {
                setUser({
                  ...user,
                  mobile: event.target.value,
                });
              }}
              id="user-mobile"
              type="text"
              sizing="md"
              icon={FaPhoneAlt}
            />
          </div>
        </FormCard>
        <FormCard>
          <h5>Web Hook</h5>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="webHook-auth" value="auth" />
            </div>
            <Select
              value={redirect}
              onChange={(event) => {
                setRedirect(event.target.value);
              }}
              icon={FaLink}
              id="webHook-auth"
              required
            >
              <option selected disabled>
                Select an authentication type
              </option>
              {hookAuths.map((hookAuth, index) => (
                <option value={hookAuth.value}>{hookAuth.name}</option>
              ))}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="webHook-url" value="url" />
            </div>
            <TextInput
              value={webhook.url}
              onChange={(event) => {
                setWebhook({
                  ...webhook,
                  url: event.target.value,
                });
              }}
              id="webHook-url"
              type="text"
              sizing="md"
              icon={FaLink}
            />
          </div>
          <div className="my-2">
            <MultipleInput
              entries={hookUrlHeaders}
              setEntries={setHookUrlHeaders}
              name="URL headers"
            ></MultipleInput>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="webHook-idetity" value="identity" />
            </div>
            <TextInput
              value={webhook.identity}
              onChange={(event) => {
                setWebhook({
                  ...webhook,
                  identity: event.target.value,
                });
              }}
              id="webHook-idetity"
              type="text"
              sizing="md"
              icon={FaRegAddressCard}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="webHook-secret" value="secret" />
            </div>
            <TextInput
              value={webhook.secret}
              onChange={(event) => {
                setWebhook({
                  ...webhook,
                  secret: event.target.value,
                });
              }}
              id="webHook-secret"
              type="text"
              sizing="md"
              icon={VscGistSecret}
            />
          </div>
          <div>
            <MultipleInput
              entries={hookCorelations}
              setEntries={setHookCorelations}
              name="Correlation"
            ></MultipleInput>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="webHook-authUrl" value="Auth-url" />
            </div>
            <TextInput
              value={webhook.authUrl}
              onChange={(event) => {
                setWebhook({
                  ...webhook,
                  authUrl: event.target.value,
                });
              }}
              icon={FaLink}
              id="webHook-authUrl"
              type="text"
              sizing="md"
            />
          </div>
          <div>
            <MultipleInput
              entries={hookAuthHeaders}
              setEntries={setHookAuthHeaders}
              name="Auth Headers"
            ></MultipleInput>
          </div>
          <button
            onClick={handleSubmit}
            class="mb-2 me-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900
                 focus:outline-none focus:ring-4 focus:ring-gray-300
                 dark:border-gray-700
                 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Submit
          </button>
        </FormCard>
        {/* </Card> */}
      </div>
    </ProtectedComponent>
  );
}
