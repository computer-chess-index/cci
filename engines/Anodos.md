# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2161<sub>(+162) | 2427<sub>(+116) | 2499<sub>(+105) |  |
| 1.2.0 | 2026-02-01 | 1999<sub>(+193) | 2311<sub>(+275) | 2394<sub>(+237) |  |
| 1.1.0 | 2026-01-16 | 1806<sub>(+55) | 2036<sub>(+65) | 2157<sub>(+125) |  |
| 1.0.0 | 2026-01-02 | 1751 | 1971 | 2032 | Previously: chess-rs |
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

Generated: 2026-09-26 04:35:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1751, 1806, 1999, 2161]
  line "STC (8.0+0.08s)" [1751, 1806, 1999, 2161]
  line "LTC (60.0+0.60s)" [1971, 2036, 2311, 2427]
  line "" [2032, 2157, 2394, 2499]
  line "VLTC (2m24s+1.12s)" [2032, 2157, 2394, 2499]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2499 | 26 | 494 | 49% | 2506 | 26% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2427 | 26 | 512 | 50% | 2426 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2161 | 24 | 604 | 49% | 2165 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2394 | 38 | 244 | 52% | 2373 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2311 | 41 | 196 | 49% | 2321 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1999 | 45 | 176 | 52% | 1982 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2157 | 37 | 256 | 51% | 2145 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2036 | 44 | 180 | 50% | 2033 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1806 | 40 | 228 | 50% | 1810 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2032 | 45 | 192 | 44% | 2128 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1971 | 49 | 156 | 48% | 1970 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1751 | 45 | 180 | 46% | 1801 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |