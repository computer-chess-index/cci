# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3443<sub>(+381) | 3649<sub>(+289) | 3687<sub>(+270) |  |
| 0.3.0 | 2026-07-19 | 3062 | 3360 | 3417 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3582<sub>(+388) | 3719<sub>(+256) | 3741<sub>(+234) |  |
| 0.3.0 | 2026-07-19 | 3194 | 3463 | 3507 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3382<sub>(+84) | 3542<sub>(+86) | 3552<sub>(+28) |  |
| 0.4.0 | 2026-08-11 | 3298<sub>(+231) | 3456<sub>(+178) | 3524<sub>(+192) |  |
| 0.3.0 | 2026-07-19 | 3067<sub>(+484) | 3278<sub>(+380) | 3332<sub>(+365) |  |
| 0.2.0 | 2026-06-24 | 2583<sub>(+555) | 2898<sub>(+577) | 2967<sub>(+550) |  |
| 0.1.0 | 2026-06-09 | 2028 | 2321 | 2417 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Justbot+<version>&body=###%20Engine%20name%0AJustbot%0A%0A###%20Version%0A0.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-08 05:38:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 3000 --> 3800
  line "E1: STC (8.0+0.08s)" [3062, 3443]
  line "E1: LTC (60.0+0.60s)" [3360, 3649]
  line "E1: VLTC (2m24s+1.12s)" [3417, 3687]
  line "P1: STC (8.0+0.08s)" [3194, 3582]
  line "P1: LTC (60.0+0.60s)" [3463, 3719]
  line "P1: VLTC (2m24s+1.12s)" [3507, 3741]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.0", "0.3.0", "0.4.0", "0.5.0"]
  y-axis "Elo Rating" 2000 --> 3600
  line "T1: STC (8.0+0.08s)" [2028, 2583, 3067, 3298, 3382]
  line "T1: LTC (60.0+0.60s)" [2321, 2898, 3278, 3456, 3542]
  line "T1: VLTC (2m24s+1.12s)" [2417, 2967, 3332, 3524, 3552]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3552 | 36 | 178 | 52% | 3542 | 88% |
|  |  | P1 | 3741 | 49 | 100 | 54% | 3714 | 79% |
|  |  | E1 | 3687 | 34 | 210 | 50% | 3683 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3542 | 31 | 244 | 55% | 3511 | 83% |
|  |  | P1 | 3719 | 37 | 168 | 52% | 3702 | 85% |
|  |  | E1 | 3649 | 34 | 204 | 51% | 3637 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3382 | 36 | 194 | 53% | 3364 | 74% |
|  |  | P1 | 3582 | 44 | 130 | 53% | 3556 | 73% |
|  |  | E1 | 3443 | 31 | 276 | 51% | 3432 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3524 | 81 | 36 | 56% | 3482 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 66 | 56 | 51% | 3445 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3298 | 59 | 76 | 47% | 3316 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3332 | 26 | 376 | 53% | 3310 | 65% |
|  |  | P1 | 3507 | 37 | 192 | 51% | 3501 | 63% |
|  |  | E1 | 3417 | 29 | 302 | 50% | 3416 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3278 | 27 | 352 | 50% | 3275 | 68% |
|  |  | P1 | 3463 | 35 | 208 | 50% | 3461 | 69% |
|  |  | E1 | 3360 | 29 | 304 | 50% | 3357 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 27 | 384 | 51% | 3059 | 50% |
|  |  | P1 | 3194 | 35 | 226 | 49% | 3209 | 53% |
|  |  | E1 | 3062 | 29 | 348 | 44% | 3117 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 37 | 212 | 50% | 2957 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2898 | 32 | 296 | 47% | 2917 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2583 | 36 | 252 | 46% | 2622 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2417 | 36 | 278 | 49% | 2438 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2321 | 35 | 284 | 49% | 2327 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2028 | 37 | 266 | 48% | 2041 | 21% |