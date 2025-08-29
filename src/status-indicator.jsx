function StatusIndicator() {
  let status = "";
  if (status === "online") {
    return <div>Online</div>;
  } else if (status === "offline") {
    return <div>Offline</div>;
  } else return <div>Away</div>;
}

export default StatusIndicator;
