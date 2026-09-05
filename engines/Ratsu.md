# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2380<sub>(+136) | 2669<sub>(+120) | 2811<sub>(+200) |  |
| 2.0.0 | 2026-05-23 | 2244<sub>(+349) | 2549<sub>(+377) | 2611<sub>(+375) |  |
| 1.2.0 | 2026-05-07 | 1895<sub>(+168) | 2172<sub>(+163) | 2236<sub>(+142) |  |
| 1.1.0 | 2026-04-21 | 1727<sub>(+79) | 2009<sub>(+127) | 2094<sub>(+142) |  |
| 1.0.0 | 2026-02-20 | 1648<sub>(+102) | 1882<sub>(+77) | 1952<sub>(+88) |  |
| 0.9.0 | 2026-01-21 | 1546 | 1805 | 1864 |  |
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

Generated: 2026-09-05 04:38:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "" [1546, 1648, 1727, 1895, 2244, 2380]
  line "STC (8.0+0.08s)" [1546, 1648, 1727, 1895, 2244, 2380]
  line "LTC (60.0+0.60s)" [1805, 1882, 2009, 2172, 2549, 2669]
  line "" [1864, 1952, 2094, 2236, 2611, 2811]
  line "VLTC (2m24s+1.12s)" [1864, 1952, 2094, 2236, 2611, 2811]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2811 | 33 | 274 | 49% | 2819 | 39% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2669 | 36 | 250 | 51% | 2660 | 32% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2380 | 32 | 326 | 49% | 2385 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2611 | 48 | 136 | 49% | 2628 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2549 | 45 | 168 | 54% | 2506 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2244 | 44 | 182 | 55% | 2190 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2236 | 31 | 364 | 51% | 2230 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2172 | 34 | 292 | 50% | 2160 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1895 | 32 | 356 | 51% | 1878 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2094 | 32 | 348 | 53% | 2068 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2009 | 33 | 326 | 51% | 1998 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1727 | 32 | 352 | 50% | 1715 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1952 | 29 | 390 | 50% | 1953 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1882 | 31 | 384 | 51% | 1875 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1648 | 30 | 394 | 48% | 1666 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1864 | 41 | 208 | 50% | 1868 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1805 | 36 | 280 | 53% | 1775 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1546 | 39 | 242 | 49% | 1555 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |