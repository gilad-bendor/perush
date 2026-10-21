# Public intermediate certificates

Some servers send their TLS certificate without the intermediate certificate that links it to a root, so a strict
client (Python, and curl behind the Claude Cloud proxy) fails with `CERTIFICATE_VERIFY_FAILED` / curl exit 60.
`tools/sources_sync.py` adds the `.pem` files here to the CA store when that happens; verification stays on.

| File | For | Source | Chains to |
|---|---|---|---|
| `InCommon-RSA-Server-CA-2.pem` | `oracc.museum.upenn.edu` (seen 2026-10-21) | the leaf's AIA URL, `http://crt.sectigo.com/InCommonRSAServerCA2.crt` (DER, converted to PEM) | USERTrust RSA Certification Authority (in the system store); valid to 2032-11-15 |

For other tools: `curl --cacert <(cat "$SSL_CERT_FILE" tools/certs/*.pem) …`, or in Python
`ctx = ssl.create_default_context(); ctx.load_verify_locations('tools/certs/InCommon-RSA-Server-CA-2.pem')`.
