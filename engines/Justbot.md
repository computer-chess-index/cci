# Engine: Justbot

Author: Hassan Fakih

Home: https://github.com/HasanFakih21/JustBot

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3440<sub>(+377) | 3652<sub>(+292) | 3691<sub>(+274) |  |
| 0.3.0 | 2026-07-19 | 3063 | 3360 | 3417 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-24 | 3575<sub>(+385) | 3714<sub>(+258) | 3735<sub>(+233) |  |
| 0.3.0 | 2026-07-19 | 3190 | 3456 | 3502 |  |
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

Generated: 2026-11-03 05:39:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 3000 --> 3800
  line "E1: STC (8.0+0.08s)" [3063, 3440]
  line "E1: LTC (60.0+0.60s)" [3360, 3652]
  line "E1: VLTC (2m24s+1.12s)" [3417, 3691]
  line "P1: STC (8.0+0.08s)" [3190, 3575]
  line "P1: LTC (60.0+0.60s)" [3456, 3714]
  line "P1: VLTC (2m24s+1.12s)" [3502, 3735]
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
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3735 | 55 | 80 | 55% | 3698 | 75% |
|  |  | E1 | 3691 | 37 | 178 | 51% | 3684 | 79% |
|  |  | T1 | 3552 | 36 | 178 | 52% | 3542 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3652 | 36 | 184 | 52% | 3637 | 82% |
|  |  | T1 | 3542 | 31 | 244 | 55% | 3511 | 83% |
|  |  | P1 | 3714 | 39 | 152 | 53% | 3692 | 85% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3440 | 32 | 260 | 51% | 3428 | 67% |
|  |  | T1 | 3382 | 36 | 194 | 53% | 3364 | 74% |
|  |  | P1 | 3575 | 46 | 120 | 53% | 3549 | 72% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3524 | 81 | 36 | 56% | 3482 | 78% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3456 | 66 | 56 | 51% | 3445 | 73% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3298 | 59 | 76 | 47% | 3316 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3502 | 37 | 192 | 51% | 3495 | 63% |
|  |  | E1 | 3417 | 29 | 302 | 50% | 3417 | 65% |
|  |  | T1 | 3332 | 26 | 376 | 53% | 3310 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3360 | 29 | 304 | 50% | 3357 | 65% |
|  |  | T1 | 3278 | 27 | 352 | 50% | 3275 | 68% |
|  |  | P1 | 3456 | 35 | 208 | 50% | 3455 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3063 | 29 | 348 | 44% | 3119 | 47% |
|  |  | T1 | 3067 | 27 | 384 | 51% | 3059 | 50% |
|  |  | P1 | 3190 | 35 | 226 | 49% | 3205 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2967 | 37 | 212 | 50% | 2957 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2898 | 32 | 296 | 47% | 2917 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2583 | 36 | 252 | 46% | 2622 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2417 | 36 | 278 | 49% | 2438 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2321 | 35 | 284 | 49% | 2327 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2028 | 37 | 266 | 48% | 2041 | 21% |