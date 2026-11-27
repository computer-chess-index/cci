# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2882<sub>(+43) | 3198<sub>(+112) | 3282<sub>(+66) |  |
| 1.6 | 2025-10-18 | 2839 | 3086 | 3216 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2934<sub>(+45) | 3175<sub>(+7) | 3270<sub>(+123) |  |
| 1.6 | 2025-10-18 | 2889 | 3168 | 3147 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2954<sub>(+42) | 3205<sub>(+54) | 3274<sub>(+58) |  |
| 1.6 | 2025-10-18 | 2912 | 3151 | 3216 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Bitbit+<version>&body=###%20Engine%20name%0ABitbit%0A%0A###%20Version%0A1.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:36:31

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2839, 2882]
  line "E1: LTC (60.0+0.60s)" [3086, 3198]
  line "E1: VLTC (2m24s+1.12s)" [3216, 3282]
  line "P1: STC (8.0+0.08s)" [2889, 2934]
  line "P1: LTC (60.0+0.60s)" [3168, 3175]
  line "P1: VLTC (2m24s+1.12s)" [3147, 3270]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2900 --> 3300
  line "T1: STC (8.0+0.08s)" [2912, 2954]
  line "T1: LTC (60.0+0.60s)" [3151, 3205]
  line "T1: VLTC (2m24s+1.12s)" [3216, 3274]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3274 | 27 | 358 | 50% | 3278 | 65% |
|  |  | P1 | 3270 | 29 | 308 | 49% | 3278 | 66% |
|  |  | E1 | 3282 | 25 | 416 | 49% | 3291 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3205 | 28 | 332 | 49% | 3210 | 61% |
|  |  | P1 | 3175 | 28 | 332 | 48% | 3189 | 63% |
|  |  | E1 | 3198 | 22 | 556 | 49% | 3208 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2934 | 31 | 310 | 49% | 2940 | 43% |
|  |  | E1 | 2882 | 25 | 516 | 45% | 2920 | 39% |
|  |  | T1 | 2954 | 28 | 372 | 51% | 2948 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3216 | 50 | 120 | 49% | 3222 | 48% |
|  |  | T1 | 3216 | 24 | 478 | 52% | 3191 | 54% |
|  |  | P1 | 3147 | 60 | 86 | 55% | 3069 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3086 | 45 | 140 | 55% | 3048 | 54% |
|  |  | T1 | 3151 | 24 | 510 | 52% | 3123 | 52% |
|  |  | P1 | 3168 | 55 | 100 | 59% | 3063 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2912 | 21 | 692 | 50% | 2900 | 40% |
|  |  | P1 | 2889 | 60 | 88 | 49% | 2904 | 41% |
|  |  | E1 | 2839 | 47 | 160 | 50% | 2780 | 33% |