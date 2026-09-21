# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3039<sub>(+147) | 3345<sub>(+147) | 3403<sub>(+129) |  |
| 3.1 | 2026-07-07 | 2892<sub>(+660) | 3198<sub>(+556) | 3274<sub>(+471) |  |
| 3.0 | 2026-05-25 | 2232<sub>(-240) | 2642<sub>(-193) | 2803<sub>(-101) |  |
| 2.2 | 2025-10-08 | 2472 | 2835 | 2904 |  |
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

Generated: 2026-09-21 04:42:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2200 --> 3500
  line "" [2472, 2232, 2892, 3039]
  line "STC (8.0+0.08s)" [2472, 2232, 2892, 3039]
  line "LTC (60.0+0.60s)" [2835, 2642, 3198, 3345]
  line "" [2904, 2803, 3274, 3403]
  line "VLTC (2m24s+1.12s)" [2904, 2803, 3274, 3403]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3403 | 33 | 214 | 51% | 3397 | 80% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3345 | 32 | 240 | 51% | 3340 | 71% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 3039 | 31 | 300 | 54% | 3006 | 48% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3274 | 27 | 350 | 53% | 3244 | 67% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3198 | 27 | 360 | 53% | 3171 | 62% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2892 | 29 | 364 | 50% | 2889 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2803 | 44 | 162 | 47% | 2827 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2642 | 45 | 156 | 49% | 2650 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2232 | 52 | 124 | 48% | 2253 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2904 | 24 | 510 | 47% | 2931 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2835 | 27 | 434 | 50% | 2835 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2472 | 25 | 540 | 48% | 2493 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |