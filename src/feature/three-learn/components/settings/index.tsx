import Box from "@src/common/components/Box";
import { useSettingActions, useSettingStates } from "../../store/threeStore";

export const Settings = () => {
  const { isControl, isGuide, isHelper } = useSettingStates();
  const { setIsControl, setIsGuide, setIsHelper } = useSettingActions();

  return (
    <Box
      style={{
        position: "absolute",
        color: "white",
        top: 0,
        left: 0,
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={isControl}
          onChange={() => setIsControl()}
        />
        <label>control</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={isGuide}
          onChange={() => setIsGuide()}
        />
        <label>Guide</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={isHelper}
          onChange={() => setIsHelper()}
        />
        <label>Helper</label>
      </div>
    </Box>
  );
};
