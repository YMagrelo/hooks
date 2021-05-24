const HookSwitcher = () => {
    const [themeColor, setThemeColor] = useState("white");
    const [fontSize, setFontSize] = useState(14);
  
    return (
      <div
        style={{
          padding: "10px",
          backgroundColor: themeColor,
          fontSize: `${fontSize}px`,
        }}
      >
        Here is text
        <button
          onClick={() => {
            setThemeColor("grey");
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setThemeColor("white");
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setFontSize((s) => s + 2);
          }}
        >
          Font size +2
        </button>
      </div>
    );
  };