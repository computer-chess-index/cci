# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2159<sub>(+162) | 2425<sub>(+116) | 2495<sub>(+104) |  |
| 1.2.0 | 2026-02-01 | 1997<sub>(+193) | 2309<sub>(+276) | 2391<sub>(+236) |  |
| 1.1.0 | 2026-01-16 | 1804<sub>(+56) | 2033<sub>(+65) | 2155<sub>(+127) |  |
| 1.0.0 | 2026-01-02 | 1748 | 1968 | 2028 | Previously: chess-rs |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Anodos+<version>&body=###%20Engine%20name%0AAnodos%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:35:40

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1748, 1804, 1997, 2159]
  line "STC (8.0+0.08s)" [1748, 1804, 1997, 2159]
  line "LTC (60.0+0.60s)" [1968, 2033, 2309, 2425]
  line "" [2028, 2155, 2391, 2495]
  line "VLTC (2m24s+1.12s)" [2028, 2155, 2391, 2495]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2495 | 26 | 494 | 49% | 2503 | 26% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2425 | 26 | 508 | 50% | 2422 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2159 | 24 | 604 | 49% | 2163 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2391 | 38 | 244 | 52% | 2371 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2309 | 41 | 196 | 49% | 2317 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1997 | 45 | 176 | 52% | 1979 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2155 | 37 | 256 | 51% | 2142 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2033 | 44 | 180 | 50% | 2030 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1804 | 40 | 228 | 50% | 1806 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2028 | 45 | 192 | 44% | 2125 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1968 | 49 | 156 | 48% | 1966 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1748 | 45 | 180 | 46% | 1798 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |