# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-06-29 | 2380<sub>(+136) | 2669<sub>(+120) | 2811<sub>(+200) |  |
| 2.0.0 | 2026-05-23 | 2244<sub>(+347) | 2549<sub>(+375) | 2611<sub>(+374) |  |
| 1.2.0 | 2026-05-07 | 1897<sub>(+169) | 2174<sub>(+165) | 2237<sub>(+142) |  |
| 1.1.0 | 2026-04-21 | 1728<sub>(+80) | 2009<sub>(+127) | 2095<sub>(+142) |  |
| 1.0.0 | 2026-02-20 | 1648<sub>(+101) | 1882<sub>(+77) | 1953<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1547 | 1805 | 1864 |  |
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

Generated: 2026-09-06 04:38:06

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "" [1547, 1648, 1728, 1897, 2244, 2380]
  line "STC (8.0+0.08s)" [1547, 1648, 1728, 1897, 2244, 2380]
  line "LTC (60.0+0.60s)" [1805, 1882, 2009, 2174, 2549, 2669]
  line "" [1864, 1953, 2095, 2237, 2611, 2811]
  line "VLTC (2m24s+1.12s)" [1864, 1953, 2095, 2237, 2611, 2811]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2812 | 33 | 274 | 49% | 2819 | 39% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2669 | 36 | 250 | 51% | 2660 | 32% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2380 | 32 | 326 | 49% | 2387 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2611 | 48 | 136 | 49% | 2628 | 38% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2549 | 45 | 168 | 54% | 2506 | 30% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2244 | 44 | 182 | 55% | 2191 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2237 | 31 | 364 | 51% | 2230 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2174 | 34 | 292 | 50% | 2160 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1897 | 32 | 356 | 51% | 1878 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2095 | 32 | 348 | 53% | 2068 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2009 | 33 | 326 | 51% | 1999 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1728 | 32 | 352 | 50% | 1715 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1953 | 29 | 390 | 50% | 1953 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1882 | 31 | 384 | 51% | 1875 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1648 | 30 | 394 | 48% | 1666 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1864 | 41 | 208 | 50% | 1868 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1805 | 36 | 280 | 53% | 1775 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1547 | 39 | 242 | 49% | 1555 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |