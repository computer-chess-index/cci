# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2888<sub>(+27) | 3201<sub>(+145) | 3286<sub>(+55) |  |
| 1.6 | 2025-10-18 | 2861 | 3056 | 3231 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2920<sub>(+30) | 3159<sub>(-20) | 3258<sub>(+108) |  |
| 1.6 | 2025-10-18 | 2890 | 3179 | 3150 |  |
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

Generated: 2026-11-23 05:36:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2861, 2888]
  line "E1: LTC (60.0+0.60s)" [3056, 3201]
  line "E1: VLTC (2m24s+1.12s)" [3231, 3286]
  line "P1: STC (8.0+0.08s)" [2890, 2920]
  line "P1: LTC (60.0+0.60s)" [3179, 3159]
  line "P1: VLTC (2m24s+1.12s)" [3150, 3258]
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
| 1.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3258 | 29 | 300 | 49% | 3267 | 66% |
|  |  | E1 | 3286 | 26 | 412 | 49% | 3294 | 60% |
|  |  | T1 | 3274 | 27 | 358 | 50% | 3278 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3201 | 23 | 524 | 49% | 3210 | 54% |
|  |  | T1 | 3205 | 28 | 332 | 49% | 3210 | 61% |
|  |  | P1 | 3159 | 29 | 308 | 48% | 3179 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2888 | 25 | 488 | 45% | 2924 | 39% |
|  |  | T1 | 2954 | 28 | 372 | 51% | 2948 | 47% |
|  |  | P1 | 2920 | 32 | 302 | 49% | 2928 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3216 | 24 | 478 | 52% | 3191 | 54% |
|  |  | P1 | 3150 | 72 | 62 | 59% | 3027 | 37% |
|  |  | E1 | 3231 | 63 | 76 | 49% | 3229 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3151 | 24 | 510 | 52% | 3123 | 52% |
|  |  | P1 | 3179 | 62 | 80 | 64% | 3023 | 53% |
|  |  | E1 | 3056 | 61 | 80 | 56% | 3019 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2912 | 21 | 692 | 50% | 2900 | 40% |
|  |  | P1 | 2890 | 65 | 76 | 50% | 2896 | 37% |
|  |  | E1 | 2861 | 60 | 104 | 53% | 2738 | 28% |