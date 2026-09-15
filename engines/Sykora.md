# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2951<sub>(+235) | 3279<sub>(+174) | 3370<sub>(+183) |  |
| 3.1 | 2026-07-15 | 2716<sub>(+375) | 3105<sub>(+99) | 3187<sub>(+131) |  |
| 3.0 | 2026-07-12 | 2341<sub>(+new) | 3006<sub>(+new) | 3056<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 2005<sub>(+115) | 2361<sub>(+132) | 2445<sub>(+24) |  |
| 0.1.0 | 2026-02-17 | 1890 | 2229 | 2421 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:43:01

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "" [1890, 2005, 2341, 2716, 2951]
  line "STC (8.0+0.08s)" [1890, 2005, 2341, 2716, 2951]
  line "LTC (60.0+0.60s)" [2229, 2361, 3006, 3105, 3279]
  line "" [2421, 2445, 3056, 3187, 3370]
  line "VLTC (2m24s+1.12s)" [2421, 2445, 3056, 3187, 3370]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3370 | 30 | 262 | 48% | 3379 | 78% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3279 | 33 | 220 | 54% | 3254 | 76% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2951 | 33 | 228 | 55% | 2909 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3187 | 44 | 132 | 50% | 3185 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3105 | 44 | 132 | 52% | 3096 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2716 | 46 | 126 | 51% | 2703 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 48 | 124 | 56% | 2993 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3006 | 56 | 96 | 54% | 2959 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2341 | 34 | 240 | 65% | 2230 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2445 | 36 | 254 | 53% | 2421 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2361 | 33 | 304 | 50% | 2357 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 2005 | 34 | 306 | 51% | 1994 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2421 | 126 | 28 | 21% | 2723 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 70 | 70 | 46% | 2261 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1890 | 97 | 40 | 41% | 2012 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |