# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2685<sub>(-2) | 3015<sub>(+7) | 3159<sub>(+28) |  |
| 11.0 | 2026-10-14 | 2687<sub>(-129) | 3008<sub>(-109) | 3131<sub>(-86) |  |
| 10 | 2026-01-17 | 2816 | 3117 | 3217 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2759<sub>(+37) | 3137<sub>(+12) | 3195<sub>(+35) |  |
| 11.0 | 2026-10-14 | 2722<sub>(-195) | 3125<sub>(-93) | 3160<sub>(-38) |  |
| 10 | 2026-01-17 | 2917 | 3218 | 3198 |  |
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

Generated: 2026-11-11 05:39:41

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10", "11.0", "11.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2816, 2687, 2685]
  line "E1: LTC (60.0+0.60s)" [3117, 3008, 3015]
  line "E1: VLTC (2m24s+1.12s)" [3217, 3131, 3159]
  line "P1: STC (8.0+0.08s)" [2917, 2722, 2759]
  line "P1: LTC (60.0+0.60s)" [3218, 3125, 3137]
  line "P1: VLTC (2m24s+1.12s)" [3198, 3160, 3195]
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
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3195 | 35 | 218 | 52% | 3178 | 56% |
|  |  | E1 | 3159 | 30 | 306 | 49% | 3170 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3137 | 36 | 218 | 46% | 3173 | 49% |
|  |  | E1 | 3015 | 28 | 382 | 48% | 3035 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2759 | 36 | 240 | 47% | 2782 | 35% |
|  |  | E1 | 2685 | 32 | 312 | 49% | 2676 | 35% |
|  | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3131 | 33 | 250 | 48% | 3150 | 58% |
|  |  | P1 | 3160 | 38 | 186 | 52% | 3144 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3008 | 32 | 284 | 48% | 3023 | 44% |
|  |  | P1 | 3125 | 41 | 170 | 47% | 3150 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2722 | 40 | 196 | 46% | 2759 | 37% |
|  |  | E1 | 2687 | 37 | 228 | 50% | 2692 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3217 | 38 | 204 | 53% | 3154 | 50% |
|  |  | T1 | 3127 | 24 | 512 | 50% | 3123 | 50% |
|  |  | P1 | 3198 | 43 | 166 | 58% | 3109 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3089 | 23 | 536 | 51% | 3071 | 52% |
|  |  | P1 | 3218 | 42 | 162 | 45% | 3263 | 56% |
|  |  | E1 | 3117 | 39 | 204 | 50% | 3114 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2853 | 20 | 792 | 46% | 2874 | 40% |
|  |  | P1 | 2917 | 54 | 102 | 49% | 2925 | 45% |
|  |  | E1 | 2816 | 37 | 218 | 45% | 2865 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3008 | 36 | 216 | 51% | 2998 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2911 | 40 | 182 | 48% | 2928 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2618 | 49 | 128 | 50% | 2619 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3042 | 38 | 198 | 51% | 3032 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2925 | 37 | 208 | 52% | 2907 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2600 | 43 | 176 | 51% | 2591 | 30% |