# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2888<sub>(+27) | 3198<sub>(+142) | 3285<sub>(+56) |  |
| 1.6 | 2025-10-18 | 2861 | 3056 | 3229 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2912<sub>(+27) | 3152<sub>(-21) | 3247<sub>(+106) |  |
| 1.6 | 2025-10-18 | 2885 | 3173 | 3141 |  |
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

Generated: 2026-11-21 05:36:28

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2861, 2888]
  line "E1: LTC (60.0+0.60s)" [3056, 3198]
  line "E1: VLTC (2m24s+1.12s)" [3229, 3285]
  line "P1: STC (8.0+0.08s)" [2885, 2912]
  line "P1: LTC (60.0+0.60s)" [3173, 3152]
  line "P1: VLTC (2m24s+1.12s)" [3141, 3247]
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
|  |  | P1 | 3247 | 30 | 296 | 48% | 3259 | 66% |
|  |  | E1 | 3285 | 26 | 412 | 49% | 3293 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3152 | 30 | 300 | 48% | 3173 | 62% |
|  |  | E1 | 3198 | 24 | 504 | 49% | 3209 | 54% |
|  |  | T1 | 3205 | 28 | 332 | 49% | 3210 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2912 | 32 | 298 | 49% | 2921 | 43% |
|  |  | E1 | 2888 | 26 | 480 | 45% | 2924 | 39% |
|  |  | T1 | 2954 | 28 | 372 | 51% | 2948 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3229 | 63 | 76 | 49% | 3228 | 43% |
|  |  | T1 | 3216 | 24 | 478 | 52% | 3191 | 54% |
|  |  | P1 | 3141 | 72 | 62 | 59% | 3020 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3151 | 24 | 510 | 52% | 3123 | 52% |
|  |  | P1 | 3173 | 62 | 80 | 64% | 3016 | 53% |
|  |  | E1 | 3056 | 61 | 80 | 56% | 3019 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2912 | 21 | 692 | 50% | 2900 | 40% |
|  |  | P1 | 2885 | 65 | 76 | 50% | 2890 | 37% |
|  |  | E1 | 2861 | 60 | 104 | 53% | 2738 | 28% |