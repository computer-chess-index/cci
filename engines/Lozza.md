# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2684<sub>(-3) | 2994<sub>(-14) | 3137<sub>(+6) |  |
| 11.0 | 2026-10-14 | 2687<sub>(-113) | 3008<sub>(-92) | 3131<sub>(-69) |  |
| 10 | 2026-01-17 | 2800 | 3100 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2755<sub>(+33) | 3160<sub>(+35) | 3195<sub>(+35) |  |
| 11.0 | 2026-10-14 | 2722<sub>(-199) | 3125<sub>(-100) | 3160<sub>(-45) |  |
| 10 | 2026-01-17 | 2921 | 3225 | 3205 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 10 | 2026-01-17 | 2853<sub>(+235) | 3089<sub>(+178) | 3127<sub>(+119) |  |
| 9 | 2026-01-10 | 2618<sub>(+18) | 2911<sub>(-14) | 3008<sub>(-34) |  |
| 8 | 2025-09-25 | 2600 | 2925 | 3042 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lozza+<version>&body=###%20Engine%20name%0ALozza%0A%0A###%20Version%0A10" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:39:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10", "11.0", "11.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2800, 2687, 2684]
  line "E1: LTC (60.0+0.60s)" [3100, 3008, 2994]
  line "E1: VLTC (2m24s+1.12s)" [3200, 3131, 3137]
  line "P1: STC (8.0+0.08s)" [2921, 2722, 2755]
  line "P1: LTC (60.0+0.60s)" [3225, 3125, 3160]
  line "P1: VLTC (2m24s+1.12s)" [3205, 3160, 3195]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8", "9", "10"]
  y-axis "Elo Rating" 2600 --> 3200
  line "T1: STC (8.0+0.08s)" [2600, 2618, 2853]
  line "T1: LTC (60.0+0.60s)" [2925, 2911, 3089]
  line "T1: VLTC (2m24s+1.12s)" [3042, 3008, 3127]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3195 | 38 | 190 | 52% | 3179 | 55% |
|  |  | E1 | 3137 | 32 | 264 | 48% | 3151 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3160 | 41 | 170 | 47% | 3183 | 48% |
|  |  | E1 | 2994 | 29 | 358 | 47% | 3017 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2755 | 39 | 204 | 46% | 2793 | 36% |
|  |  | E1 | 2684 | 36 | 240 | 49% | 2695 | 37% |
|  | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3131 | 33 | 250 | 48% | 3150 | 58% |
|  |  | P1 | 3160 | 38 | 186 | 52% | 3144 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3008 | 32 | 284 | 48% | 3023 | 44% |
|  |  | P1 | 3125 | 41 | 170 | 47% | 3150 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2687 | 37 | 228 | 50% | 2692 | 37% |
|  |  | P1 | 2722 | 40 | 196 | 46% | 2759 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3200 | 38 | 204 | 53% | 3137 | 50% |
|  |  | T1 | 3127 | 24 | 512 | 50% | 3123 | 50% |
|  |  | P1 | 3205 | 43 | 166 | 58% | 3117 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3100 | 39 | 204 | 50% | 3096 | 43% |
|  |  | T1 | 3089 | 23 | 536 | 51% | 3071 | 52% |
|  |  | P1 | 3225 | 42 | 162 | 45% | 3270 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2853 | 20 | 792 | 46% | 2874 | 40% |
|  |  | P1 | 2921 | 54 | 102 | 49% | 2930 | 45% |
|  |  | E1 | 2800 | 37 | 218 | 45% | 2849 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3008 | 36 | 216 | 51% | 2998 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2911 | 40 | 182 | 48% | 2928 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2618 | 49 | 128 | 50% | 2619 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3042 | 38 | 198 | 51% | 3032 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2925 | 37 | 208 | 52% | 2907 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2600 | 43 | 176 | 51% | 2591 | 30% |