# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2684<sub>(-3) | 2996<sub>(-12) | 3136<sub>(+5) |  |
| 11.0 | 2026-10-14 | 2687<sub>(-113) | 3008<sub>(-92) | 3131<sub>(-67) |  |
| 10 | 2026-01-17 | 2800 | 3100 | 3198 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2751<sub>(+29) | 3148<sub>(+23) | 3183<sub>(+23) |  |
| 11.0 | 2026-10-14 | 2722<sub>(-189) | 3125<sub>(-88) | 3160<sub>(-33) |  |
| 10 | 2026-01-17 | 2911 | 3213 | 3193 |  |
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

Generated: 2026-11-03 05:39:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10", "11.0", "11.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2800, 2687, 2684]
  line "E1: LTC (60.0+0.60s)" [3100, 3008, 2996]
  line "E1: VLTC (2m24s+1.12s)" [3198, 3131, 3136]
  line "P1: STC (8.0+0.08s)" [2911, 2722, 2751]
  line "P1: LTC (60.0+0.60s)" [3213, 3125, 3148]
  line "P1: VLTC (2m24s+1.12s)" [3193, 3160, 3183]
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
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3136 | 32 | 272 | 48% | 3151 | 58% |
|  |  | P1 | 3183 | 38 | 190 | 52% | 3167 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2996 | 29 | 362 | 47% | 3017 | 44% |
|  |  | P1 | 3148 | 41 | 170 | 47% | 3171 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2751 | 38 | 216 | 47% | 2780 | 35% |
|  |  | E1 | 2684 | 36 | 248 | 49% | 2695 | 36% |
|  | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3160 | 38 | 186 | 52% | 3144 | 55% |
|  |  | E1 | 3131 | 33 | 250 | 48% | 3150 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3125 | 41 | 170 | 47% | 3150 | 48% |
|  |  | E1 | 3008 | 32 | 284 | 48% | 3023 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2722 | 40 | 196 | 46% | 2759 | 37% |
|  |  | E1 | 2687 | 37 | 228 | 50% | 2692 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3127 | 24 | 512 | 50% | 3123 | 50% |
|  |  | P1 | 3193 | 43 | 166 | 58% | 3105 | 48% |
|  |  | E1 | 3198 | 38 | 204 | 53% | 3136 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3213 | 42 | 162 | 45% | 3258 | 56% |
|  |  | E1 | 3100 | 39 | 204 | 50% | 3096 | 43% |
|  |  | T1 | 3089 | 23 | 536 | 51% | 3071 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2911 | 54 | 102 | 49% | 2920 | 45% |
|  |  | E1 | 2800 | 37 | 218 | 45% | 2849 | 44% |
|  |  | T1 | 2853 | 20 | 792 | 46% | 2874 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3008 | 36 | 216 | 51% | 2998 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2911 | 40 | 182 | 48% | 2928 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2618 | 49 | 128 | 50% | 2619 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3042 | 38 | 198 | 51% | 3032 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2925 | 37 | 208 | 52% | 2907 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2600 | 43 | 176 | 51% | 2591 | 30% |