# Engine: Ynode

Author: oozturk777

Home: https://github.com/oozturk777/ynode

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3116<sub>(+46) | 3357<sub>(-38) | 3411<sub>(+64) |  |
| 0219 | 2025-11-16 | 3070 | 3395 | 3347 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3143<sub>(+85) | 3326<sub>(+70) | 3363<sub>(-80) |  |
| 0219 | 2025-11-16 | 3058 | 3256 | 3443 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0234 | 2026-03-22 | 3141<sub>(-10) | 3356<sub>(+23) | 3407<sub>(+25) |  |
| 0219 | 2025-11-16 | 3151 | 3333 | 3382 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ynode+<version>&body=###%20Engine%20name%0AYnode%0A%0A###%20Version%0A0234" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:44:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3070, 3116]
  line "E1: LTC (60.0+0.60s)" [3395, 3357]
  line "E1: VLTC (2m24s+1.12s)" [3347, 3411]
  line "P1: STC (8.0+0.08s)" [3058, 3143]
  line "P1: LTC (60.0+0.60s)" [3256, 3326]
  line "P1: VLTC (2m24s+1.12s)" [3443, 3363]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0219", "0234"]
  y-axis "Elo Rating" 3100 --> 3500
  line "T1: STC (8.0+0.08s)" [3151, 3141]
  line "T1: LTC (60.0+0.60s)" [3333, 3356]
  line "T1: VLTC (2m24s+1.12s)" [3382, 3407]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0234 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3407 | 25 | 382 | 50% | 3409 | 81% |
|  |  | P1 | 3363 | 33 | 234 | 54% | 3317 | 73% |
|  |  | E1 | 3411 | 24 | 464 | 57% | 3303 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3356 | 24 | 416 | 51% | 3347 | 74% |
|  |  | P1 | 3326 | 29 | 302 | 54% | 3281 | 70% |
|  |  | E1 | 3357 | 27 | 370 | 54% | 3294 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3143 | 33 | 250 | 49% | 3151 | 61% |
|  |  | E1 | 3116 | 25 | 462 | 47% | 3148 | 54% |
|  |  | T1 | 3141 | 23 | 524 | 50% | 3140 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0219 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3347 | 61 | 70 | 59% | 3278 | 67% |
|  |  | T1 | 3382 | 27 | 336 | 52% | 3357 | 79% |
|  |  | P1 | 3443 | 136 | 22 | 64% | 3260 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3333 | 25 | 406 | 49% | 3326 | 72% |
|  |  | P1 | 3256 | 70 | 64 | 67% | 3055 | 50% |
|  |  | E1 | 3395 | 69 | 72 | 65% | 3042 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3151 | 24 | 490 | 53% | 3105 | 57% |
|  |  | P1 | 3058 | 61 | 84 | 42% | 3052 | 46% |
|  |  | E1 | 3070 | 67 | 70 | 53% | 3033 | 46% |