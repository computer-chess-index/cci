# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2954<sub>(-17) | 3244<sub>(+15) | 3337<sub>(+61) |  |
| 4.48 | 2026-07-12 | 2971 | 3229 | 3276 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2965<sub>(+76) | 3194<sub>(-60) | 3302<sub>(+26) |  |
| 4.48 | 2026-07-12 | 2889 | 3254 | 3276 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2977<sub>(-12) | 3248<sub>(+1) | 3310<sub>(+24) |  |
| 4.48 | 2026-07-12 | 2989 | 3247 | 3286 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cheng4+<version>&body=###%20Engine%20name%0ACheng4%0A%0A###%20Version%0A4.49" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-21 05:37:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2971, 2954]
  line "E1: LTC (60.0+0.60s)" [3229, 3244]
  line "E1: VLTC (2m24s+1.12s)" [3276, 3337]
  line "P1: STC (8.0+0.08s)" [2889, 2965]
  line "P1: LTC (60.0+0.60s)" [3254, 3194]
  line "P1: VLTC (2m24s+1.12s)" [3276, 3302]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3400
  line "T1: STC (8.0+0.08s)" [2989, 2977]
  line "T1: LTC (60.0+0.60s)" [3247, 3248]
  line "T1: VLTC (2m24s+1.12s)" [3286, 3310]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3310 | 34 | 228 | 51% | 3305 | 64% |
|  |  | P1 | 3302 | 28 | 318 | 51% | 3295 | 66% |
|  |  | E1 | 3337 | 26 | 398 | 49% | 3343 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3194 | 29 | 328 | 48% | 3206 | 54% |
|  |  | E1 | 3244 | 25 | 446 | 48% | 3260 | 57% |
|  |  | T1 | 3248 | 32 | 264 | 50% | 3247 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2965 | 33 | 274 | 49% | 2974 | 45% |
|  |  | E1 | 2954 | 25 | 476 | 47% | 2982 | 43% |
|  |  | T1 | 2977 | 34 | 250 | 49% | 2986 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3276 | 58 | 96 | 62% | 3058 | 45% |
|  |  | T1 | 3286 | 25 | 432 | 53% | 3252 | 61% |
|  |  | P1 | 3276 | 63 | 66 | 54% | 3240 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3247 | 29 | 320 | 52% | 3210 | 58% |
|  |  | P1 | 3254 | 74 | 56 | 55% | 3177 | 43% |
|  |  | E1 | 3229 | 55 | 96 | 55% | 3178 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2989 | 29 | 370 | 54% | 2942 | 41% |
|  |  | P1 | 2889 | 64 | 84 | 58% | 2660 | 33% |
|  |  | E1 | 2971 | 63 | 92 | 60% | 2731 | 30% |