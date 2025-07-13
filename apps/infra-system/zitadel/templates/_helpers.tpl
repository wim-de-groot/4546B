{{/*
  Generate a random username for the database which is both referenced within zitadel and cnpg
*/}}
{{- define "database.username" -}}
{{- randAscii 32 | quote }}
{{- end }}

{{/*
  Generate a random password for the database which is both referenced within zitadel and cnpg
*/}}
{{- define "database.password" -}}
{{- randAscii 32 | quote }}
{{- end }}
