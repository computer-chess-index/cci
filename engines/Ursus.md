# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3058<sub>(+77) | 3343<sub>(+68) | 3403<sub>(+41) |  |
| 1.0.1 | 2026-07-27 | 2981 | 3275 | 3362 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3129<sub>(+39) | 3362<sub>(+76) | 3414<sub>(+9) |  |
| 1.0.1 | 2026-07-27 | 3090 | 3286 | 3405 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3101<sub>(+23) | 3380<sub>(+98) | 3410<sub>(+51) |  |
| 1.0.1 | 2026-07-27 | 3078<sub>(+1) | 3282<sub>(-21) | 3359<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3077 | 3303 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:44:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.1", "1.1.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "E1: STC (8.0+0.08s)" [2981, 3058]
  line "E1: LTC (60.0+0.60s)" [3275, 3343]
  line "E1: VLTC (2m24s+1.12s)" [3362, 3403]
  line "P1: STC (8.0+0.08s)" [3090, 3129]
  line "P1: LTC (60.0+0.60s)" [3286, 3362]
  line "P1: VLTC (2m24s+1.12s)" [3405, 3414]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "T1: STC (8.0+0.08s)" [3077, 3078, 3101]
  line "T1: LTC (60.0+0.60s)" [3303, 3282, 3380]
  line "T1: VLTC (2m24s+1.12s)" [3355, 3359, 3410]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3410 | 38 | 172 | 51% | 3402 | 73% |
|  |  | P1 | 3414 | 40 | 158 | 53% | 3374 | 72% |
|  |  | E1 | 3403 | 29 | 334 | 52% | 3347 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3380 | 38 | 172 | 50% | 3378 | 69% |
|  |  | P1 | 3362 | 37 | 200 | 55% | 3310 | 61% |
|  |  | E1 | 3343 | 30 | 296 | 53% | 3309 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3129 | 35 | 232 | 50% | 3120 | 50% |
|  |  | E1 | 3058 | 31 | 318 | 56% | 2989 | 42% |
|  |  | T1 | 3101 | 35 | 220 | 48% | 3121 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3359 | 37 | 184 | 48% | 3370 | 68% |
|  |  | P1 | 3405 | 73 | 52 | 58% | 3310 | 58% |
|  |  | E1 | 3362 | 82 | 44 | 58% | 3225 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3286 | 70 | 52 | 55% | 3241 | 67% |
|  |  | E1 | 3275 | 54 | 96 | 58% | 3171 | 59% |
|  |  | T1 | 3282 | 37 | 184 | 49% | 3285 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3090 | 74 | 48 | 45% | 3132 | 60% |
|  |  | E1 | 2981 | 58 | 88 | 47% | 2982 | 49% |
|  |  | T1 | 3078 | 46 | 132 | 52% | 3066 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3355 | 40 | 160 | 55% | 3309 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3303 | 40 | 166 | 55% | 3252 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3077 | 49 | 120 | 55% | 3023 | 53% |