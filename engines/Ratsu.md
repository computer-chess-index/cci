# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2381<sub>(+136) | 2666<sub>(+114) | 2813<sub>(+199) |  |
| 2.0.0 | 2026-05-23 | 2245<sub>(+348) | 2552<sub>(+377) | 2614<sub>(+376) |  |
| 1.2.0 | 2026-05-07 | 1897<sub>(+169) | 2175<sub>(+165) | 2238<sub>(+143) |  |
| 1.1.0 | 2026-04-21 | 1728<sub>(+80) | 2010<sub>(+128) | 2095<sub>(+142) |  |
| 1.0.0 | 2026-02-20 | 1648<sub>(+101) | 1882<sub>(+76) | 1953<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1547 | 1806 | 1864 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:41:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "" [1547, 1648, 1728, 1897, 2245, 2381]
  line "STC (8.0+0.08s)" [1547, 1648, 1728, 1897, 2245, 2381]
  line "LTC (60.0+0.60s)" [1806, 1882, 2010, 2175, 2552, 2666]
  line "" [1864, 1953, 2095, 2238, 2614, 2813]
  line "VLTC (2m24s+1.12s)" [1864, 1953, 2095, 2238, 2614, 2813]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2813 | 33 | 278 | 49% | 2822 | 39% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2666 | 35 | 258 | 50% | 2662 | 32% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2381 | 32 | 330 | 49% | 2387 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2614 | 48 | 136 | 49% | 2630 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2552 | 45 | 168 | 54% | 2508 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2245 | 44 | 182 | 55% | 2191 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2238 | 31 | 364 | 51% | 2232 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2175 | 34 | 292 | 50% | 2161 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1897 | 32 | 356 | 51% | 1878 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2095 | 32 | 348 | 53% | 2070 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2010 | 33 | 326 | 51% | 1999 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1728 | 32 | 352 | 50% | 1716 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1953 | 29 | 390 | 50% | 1955 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1882 | 31 | 384 | 51% | 1877 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1648 | 30 | 394 | 48% | 1667 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1864 | 41 | 208 | 50% | 1870 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1806 | 36 | 280 | 53% | 1775 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1547 | 39 | 242 | 49% | 1555 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |