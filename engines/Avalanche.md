# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3279<sub>(+133) | 3515<sub>(+58) | 3586<sub>(+76) |  |
| 4.0.0 | 2026-08-08 | 3146 | 3457 | 3510 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3424<sub>(+134) | 3619<sub>(+77) | 3688<sub>(+97) |  |
| 4.0.0 | 2026-08-08 | 3290 | 3542 | 3591 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3194<sub>(+289) | 3395<sub>(+194) | 3448<sub>(+211) |  |
| 3.0.0 | 2026-06-25 | 2905 | 3201 | 3237 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-22 04:36:19

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3146, 3279]
  line "E1: LTC (60.0+0.60s)" [3457, 3515]
  line "E1: VLTC (2m24s+1.12s)" [3510, 3586]
  line "P1: STC (8.0+0.08s)" [3290, 3424]
  line "P1: LTC (60.0+0.60s)" [3542, 3619]
  line "P1: VLTC (2m24s+1.12s)" [3591, 3688]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "T1: STC (8.0+0.08s)" [2905, 3194]
  line "T1: LTC (60.0+0.60s)" [3201, 3395]
  line "T1: VLTC (2m24s+1.12s)" [3237, 3448]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3688 | 42 | 138 | 49% | 3696 | 78% |
|  |  | E1 | 3586 | 39 | 160 | 52% | 3572 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3619 | 44 | 126 | 52% | 3610 | 75% |
|  |  | E1 | 3515 | 31 | 268 | 54% | 3487 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3424 | 39 | 172 | 49% | 3428 | 66% |
|  |  | E1 | 3279 | 35 | 214 | 51% | 3266 | 64% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3448 | 26 | 370 | 52% | 3432 | 79% |
|  |  | P1 | 3591 | 36 | 178 | 48% | 3599 | 81% |
|  |  | E1 | 3510 | 31 | 252 | 50% | 3513 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3395 | 28 | 304 | 51% | 3384 | 75% |
|  |  | P1 | 3542 | 39 | 164 | 50% | 3540 | 73% |
|  |  | E1 | 3457 | 33 | 244 | 50% | 3459 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3290 | 37 | 204 | 47% | 3314 | 55% |
|  |  | E1 | 3146 | 30 | 304 | 44% | 3190 | 59% |
|  |  | T1 | 3194 | 29 | 312 | 49% | 3204 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3237 | 32 | 262 | 53% | 3208 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3201 | 34 | 240 | 53% | 3164 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2905 | 31 | 320 | 51% | 2894 | 41% |