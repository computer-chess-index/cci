# Engine: Bitbit

Author: Isak Ellmer

Home: https://github.com/Spinojara/bitbit

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2882<sub>(-26) | 3194<sub>(+135) | 3281<sub>(+49) |  |
| 1.6 | 2025-10-18 | 2908 | 3059 | 3232 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.7 | 2026-08-01 | 2881<sub>(+39) | 3144<sub>(+73) | 3244<sub>(+202) |  |
| 1.6 | 2025-10-18 | 2842 | 3071 | 3042 |  |
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

Generated: 2026-11-14 05:36:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "1.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2908, 2882]
  line "E1: LTC (60.0+0.60s)" [3059, 3194]
  line "E1: VLTC (2m24s+1.12s)" [3232, 3281]
  line "P1: STC (8.0+0.08s)" [2842, 2881]
  line "P1: LTC (60.0+0.60s)" [3071, 3144]
  line "P1: VLTC (2m24s+1.12s)" [3042, 3244]
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
|  |  | P1 | 3244 | 31 | 268 | 48% | 3258 | 66% |
|  |  | E1 | 3281 | 26 | 396 | 49% | 3286 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3205 | 28 | 332 | 49% | 3210 | 61% |
|  |  | P1 | 3144 | 31 | 280 | 47% | 3166 | 62% |
|  |  | E1 | 3194 | 24 | 488 | 49% | 3202 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2954 | 28 | 372 | 51% | 2948 | 47% |
|  |  | P1 | 2881 | 35 | 254 | 49% | 2890 | 41% |
|  |  | E1 | 2882 | 27 | 448 | 45% | 2917 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3216 | 24 | 478 | 52% | 3191 | 54% |
|  |  | P1 | 3042 | 136 | 20 | 70% | 2747 | 30% |
|  |  | E1 | 3232 | 96 | 36 | 54% | 3189 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3071 | 111 | 32 | 78% | 2741 | 31% |
|  |  | E1 | 3059 | 89 | 40 | 61% | 2978 | 48% |
|  |  | T1 | 3151 | 24 | 510 | 52% | 3123 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2842 | 131 | 24 | 46% | 2866 | 17% |
|  |  | E1 | 2908 | 95 | 52 | 63% | 2597 | 23% |
|  |  | T1 | 2912 | 21 | 692 | 50% | 2900 | 40% |