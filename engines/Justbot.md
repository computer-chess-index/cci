# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3452<sub>(+379) | 3661<sub>(+290) | 3699<sub>(+270) |  |
| 0.3.0 | 2026-07-19 | 3073 | 3371 | 3429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3630<sub>(+386) | 3767<sub>(+257) | 3787<sub>(+231) |  |
| 0.3.0 | 2026-07-19 | 3244 | 3510 | 3556 |  |
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

Generated: 2026-11-06 05:38:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 3000 --> 3800
  line "E1: STC (8.0+0.08s)" [3073, 3452]
  line "E1: LTC (60.0+0.60s)" [3371, 3661]
  line "E1: VLTC (2m24s+1.12s)" [3429, 3699]
  line "P1: STC (8.0+0.08s)" [3244, 3630]
  line "P1: LTC (60.0+0.60s)" [3510, 3767]
  line "P1: VLTC (2m24s+1.12s)" [3556, 3787]
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
|  |  | P1 | 3787 | 52 | 88 | 54% | 3756 | 76% |
|  |  | E1 | 3699 | 34 | 202 | 50% | 3695 | 80% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3542 | 31 | 244 | 55% | 3511 | 83% |
|  |  | P1 | 3767 | 38 | 164 | 52% | 3748 | 84% |
|  |  | E1 | 3661 | 34 | 200 | 52% | 3648 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3382 | 36 | 194 | 53% | 3364 | 74% |
|  |  | P1 | 3630 | 44 | 130 | 53% | 3605 | 73% |
|  |  | E1 | 3452 | 31 | 268 | 51% | 3443 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3524 | 81 | 36 | 56% | 3482 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 66 | 56 | 51% | 3445 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3298 | 59 | 76 | 47% | 3316 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3332 | 26 | 376 | 53% | 3310 | 65% |
|  |  | P1 | 3556 | 37 | 192 | 51% | 3549 | 63% |
|  |  | E1 | 3429 | 29 | 302 | 50% | 3428 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3278 | 27 | 352 | 50% | 3275 | 68% |
|  |  | P1 | 3510 | 35 | 208 | 50% | 3510 | 69% |
|  |  | E1 | 3371 | 29 | 304 | 50% | 3370 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3067 | 27 | 384 | 51% | 3059 | 50% |
|  |  | P1 | 3244 | 35 | 226 | 49% | 3259 | 53% |
|  |  | E1 | 3073 | 29 | 348 | 44% | 3128 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 37 | 212 | 50% | 2957 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2898 | 32 | 296 | 47% | 2917 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2583 | 36 | 252 | 46% | 2622 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2417 | 36 | 278 | 49% | 2438 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2321 | 35 | 284 | 49% | 2327 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2028 | 37 | 266 | 48% | 2041 | 21% |