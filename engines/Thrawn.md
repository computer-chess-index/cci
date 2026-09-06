# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3029<sub>(+141) | 3347<sub>(+153) | 3399<sub>(+129) |  |
| 3.1 | 2026-07-07 | 2888<sub>(+658) | 3194<sub>(+553) | 3270<sub>(+470) |  |
| 3.0 | 2026-05-25 | 2230<sub>(-239) | 2641<sub>(-191) | 2800<sub>(-101) |  |
| 2.2 | 2025-10-08 | 2469 | 2832 | 2901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 04:39:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2200 --> 3400
  line "" [2469, 2230, 2888, 3029]
  line "STC (8.0+0.08s)" [2469, 2230, 2888, 3029]
  line "LTC (60.0+0.60s)" [2832, 2641, 3194, 3347]
  line "" [2901, 2800, 3270, 3399]
  line "VLTC (2m24s+1.12s)" [2901, 2800, 3270, 3399]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3399 | 51 | 94 | 52% | 3382 | 74% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3347 | 38 | 172 | 51% | 3336 | 72% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 3029 | 36 | 220 | 54% | 2993 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 27 | 350 | 53% | 3241 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 27 | 360 | 53% | 3168 | 62% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2888 | 29 | 364 | 50% | 2885 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2800 | 44 | 162 | 47% | 2824 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2641 | 45 | 156 | 49% | 2649 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2230 | 52 | 124 | 48% | 2252 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2901 | 24 | 510 | 47% | 2928 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2832 | 27 | 434 | 50% | 2832 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2469 | 25 | 540 | 48% | 2492 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |