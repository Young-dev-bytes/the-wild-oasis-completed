import { useState } from "react";

export default function useCustomState() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return { isOpen, isCollapsed, setIsOpen, setIsCollapsed };
}
