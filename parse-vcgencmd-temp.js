// This script was created to parse the output of the "vcgencmd measure_temp" command to a number
// Used within a node-red function, on-message

const regex = /[\d\.]+/;
msg.payload = parseFloat( msg.payload.match(regex)[0] );

return msg;
