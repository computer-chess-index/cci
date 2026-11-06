# Engine: Lozza

Author: Colin Jenkins

Home: https://github.com/op12no2/lozza

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2684<sub>(-3) | 3006<sub>(-2) | 3151<sub>(+20) |  |
| 11.0 | 2026-10-14 | 2687<sub>(-122) | 3008<sub>(-101) | 3131<sub>(-79) |  |
| 10 | 2026-01-17 | 2809 | 3109 | 3210 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-30 | 2801<sub>(+79) | 3191<sub>(+66) | 3244<sub>(+84) |  |
| 11.0 | 2026-10-14 | 2722<sub>(-243) | 3125<sub>(-141) | 3160<sub>(-87) |  |
| 10 | 2026-01-17 | 2965 | 3266 | 3247 |  |
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

Generated: 2026-11-06 05:39:30

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["10", "11.0", "11.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "E1: STC (8.0+0.08s)" [2809, 2687, 2684]
  line "E1: LTC (60.0+0.60s)" [3109, 3008, 3006]
  line "E1: VLTC (2m24s+1.12s)" [3210, 3131, 3151]
  line "P1: STC (8.0+0.08s)" [2965, 2722, 2801]
  line "P1: LTC (60.0+0.60s)" [3266, 3125, 3191]
  line "P1: VLTC (2m24s+1.12s)" [3247, 3160, 3244]
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
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3151 | 31 | 288 | 49% | 3160 | 59% |
|  |  | P1 | 3244 | 37 | 198 | 53% | 3222 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3191 | 39 | 194 | 46% | 3224 | 48% |
|  |  | E1 | 3006 | 29 | 366 | 48% | 3027 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2801 | 37 | 228 | 47% | 2830 | 36% |
|  |  | E1 | 2684 | 34 | 276 | 48% | 2699 | 37% |
|  | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3160 | 38 | 186 | 52% | 3144 | 55% |
|  |  | E1 | 3131 | 33 | 250 | 48% | 3150 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3125 | 41 | 170 | 47% | 3150 | 48% |
|  |  | E1 | 3008 | 32 | 284 | 48% | 3023 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2722 | 40 | 196 | 46% | 2759 | 37% |
|  |  | E1 | 2687 | 37 | 228 | 50% | 2692 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 10 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3247 | 43 | 166 | 58% | 3159 | 48% |
|  |  | E1 | 3210 | 38 | 204 | 53% | 3148 | 50% |
|  |  | T1 | 3127 | 24 | 512 | 50% | 3123 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3266 | 42 | 162 | 45% | 3312 | 56% |
|  |  | E1 | 3109 | 39 | 204 | 50% | 3106 | 43% |
|  |  | T1 | 3089 | 23 | 536 | 51% | 3071 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2965 | 54 | 102 | 49% | 2973 | 45% |
|  |  | E1 | 2809 | 37 | 218 | 45% | 2858 | 44% |
|  |  | T1 | 2853 | 20 | 792 | 46% | 2874 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3008 | 36 | 216 | 51% | 2998 | 52% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2911 | 40 | 182 | 48% | 2928 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2618 | 49 | 128 | 50% | 2619 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3042 | 38 | 198 | 51% | 3032 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2925 | 37 | 208 | 52% | 2907 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2600 | 43 | 176 | 51% | 2591 | 30% |