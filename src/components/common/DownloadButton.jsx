import axiosInstance from "../../utils/axiosInstance";

export function DownloadButton(props) {
  const download = () => {
    axiosInstance
      .get(props.url, {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", props.filename); // Provide the filename
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    <button
      onClick={download}
      className="inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
    >
      <svg
        class="mr-2 h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Download</span>
    </button>
  );
}
