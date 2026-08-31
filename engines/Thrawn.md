# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-07 | 2889<sub>(+660) | 3189<sub>(+550) | 3270<sub>(+471) |  |
| 3.0 | 2026-05-25 | 2229<sub>(-239) | 2639<sub>(-191) | 2799<sub>(-101) |  |
| 2.2 | 2025-10-08 | 2468 | 2830 | 2900 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-31 04:39:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "" [2468, 2229, 2889]
  line "STC (8.0+0.08s)" [2468, 2229, 2889]
  line "LTC (60.0+0.60s)" [2830, 2639, 3189]
  line "" [2900, 2799, 3270]
  line "VLTC (2m24s+1.12s)" [2900, 2799, 3270]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3270 | 27 | 350 | 53% | 3240 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 28 | 344 | 52% | 3164 | 62% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2889 | 29 | 360 | 50% | 2884 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2799 | 44 | 162 | 47% | 2823 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2639 | 45 | 156 | 49% | 2647 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2229 | 52 | 124 | 48% | 2250 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2900 | 24 | 510 | 47% | 2927 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2830 | 27 | 434 | 50% | 2831 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2468 | 25 | 540 | 48% | 2489 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |