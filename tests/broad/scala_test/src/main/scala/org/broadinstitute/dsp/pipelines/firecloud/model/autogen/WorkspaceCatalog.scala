/**
  * FireCloud
  * Genome analysis execution service.
  *
  * OpenAPI spec version: 0.1
  *
  *
  * NOTE: This class is auto generated by the swagger code generator program.
  * https://github.com/swagger-api/swagger-codegen.git
  * Do not edit the class manually.
  */
package org.broadinstitute.dsp.pipelines.firecloud.model.autogen

case class WorkspaceCatalog(
    /* email address of the user or group whose permissions will be changed */
    email: String,
    /* Set to true if you want this user to be able to perform library related operations on the workspace */
    catalog: Boolean
)
