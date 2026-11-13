# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2423<sub>(-178) | 2718<sub>(-446) | 2826<sub>(-271) |  |
| 1.0 | 2025-10-19 | 2601 | 3164 | 3097 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2356<sub>(-363) | 2703<sub>(-119) | 2768<sub>(-40) |  |
| 1.0 | 2025-10-19 | 2719 | 2822 | 2808 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2473<sub>(-370) | 2758<sub>(-359) | 2830<sub>(-313) |  |
| 1.0 | 2025-10-19 | 2843 | 3117 | 3143 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Publius+<version>&body=###%20Engine%20name%0APublius%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:41:34

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2300 --> 3200
  line "E1: STC (8.0+0.08s)" [2601, 2423]
  line "E1: LTC (60.0+0.60s)" [3164, 2718]
  line "E1: VLTC (2m24s+1.12s)" [3097, 2826]
  line "P1: STC (8.0+0.08s)" [2719, 2356]
  line "P1: LTC (60.0+0.60s)" [2822, 2703]
  line "P1: VLTC (2m24s+1.12s)" [2808, 2768]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2400 --> 3200
  line "T1: STC (8.0+0.08s)" [2843, 2473]
  line "T1: LTC (60.0+0.60s)" [3117, 2758]
  line "T1: VLTC (2m24s+1.12s)" [3143, 2830]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2830 | 24 | 560 | 48% | 2851 | 36% |
|  |  | P1 | 2768 | 39 | 224 | 51% | 2745 | 30% |
|  |  | E1 | 2826 | 28 | 416 | 51% | 2781 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2758 | 25 | 522 | 50% | 2761 | 35% |
|  |  | P1 | 2703 | 40 | 208 | 49% | 2723 | 32% |
|  |  | E1 | 2718 | 29 | 396 | 53% | 2658 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2473 | 22 | 694 | 49% | 2472 | 29% |
|  |  | P1 | 2356 | 36 | 260 | 46% | 2398 | 30% |
|  |  | E1 | 2423 | 33 | 346 | 49% | 2433 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3097 | 164 | 12 | 58% | 3004 | 33% |
|  |  | T1 | 3143 | 34 | 232 | 49% | 3154 | 57% |
|  |  | P1 | 2808 | 204 | 16 | 94% | 2144 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3164 | 191 | 14 | 64% | 2921 | 14% |
|  |  | T1 | 3117 | 34 | 248 | 52% | 3090 | 55% |
|  |  | P1 | 2822 | 145 | 16 | 75% | 2533 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2601 | 114 | 28 | 73% | 2385 | 25% |
|  |  | T1 | 2843 | 36 | 232 | 53% | 2809 | 41% |
|  |  | P1 | 2719 | 144 | 16 | 66% | 2469 | 31% |