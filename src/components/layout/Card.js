import React from "react";
import { Card, CardContent } from "@material-ui/core"

export const SimpleCard = ({ children, title, raised = false }) => (
 <Card title={title} raised={raised}>
  <CardContent>
   {children}
  </CardContent>
 </Card>
);
