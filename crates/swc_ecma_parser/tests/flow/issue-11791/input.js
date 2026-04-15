function codegenNativeCommands<T: interface {}>(
  options: {supportedCommands: ReadonlyArray<keyof T>},
): T {
  const commandObj: {[keyof T]: (...ReadonlyArray<unknown>) => void} = {};
  return ((commandObj: any): T);
}
