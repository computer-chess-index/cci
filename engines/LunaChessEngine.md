# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2843<sub>(+26) | 3204<sub>(-6) | 3333<sub>(+63) |  |
| 4.1.1 | 2026-11-02 | 2817<sub>(-3) | 3210<sub>(+19) | 3270<sub>(-11) |  |
| 4.1.0 | 2026-10-16 | 2820 | 3191 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2935<sub>(+18) | 3294<sub>(+24) | 3378<sub>(+12) |  |
| 4.1.1 | 2026-11-02 | 2917<sub>(+48) | 3270<sub>(-24) | 3366<sub>(-12) |  |
| 4.1.0 | 2026-10-16 | 2869 | 3294 | 3378 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2869 | 3294 | 3378 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LunaChessEngine+<version>&body=###%20Engine%20name%0ALunaChessEngine%0A%0A###%20Version%0A4.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-10 05:39:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2820, 2817, 2843]
  line "E1: LTC (60.0+0.60s)" [3191, 3210, 3204]
  line "E1: VLTC (2m24s+1.12s)" [3281, 3270, 3333]
  line "P1: STC (8.0+0.08s)" [2869, 2917, 2935]
  line "P1: LTC (60.0+0.60s)" [3294, 3270, 3294]
  line "P1: VLTC (2m24s+1.12s)" [3378, 3366, 3378]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3378 | 39 | 164 | 48% | 3390 | 68% |
|  |  | E1 | 3333 | 27 | 360 | 49% | 3341 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3294 | 42 | 152 | 48% | 3305 | 60% |
|  |  | E1 | 3204 | 34 | 226 | 51% | 3191 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2935 | 44 | 160 | 47% | 2963 | 41% |
|  |  | E1 | 2843 | 36 | 234 | 49% | 2851 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3366 | 38 | 188 | 52% | 3351 | 59% |
|  |  | E1 | 3270 | 34 | 232 | 49% | 3275 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3270 | 43 | 158 | 55% | 3232 | 46% |
|  |  | E1 | 3210 | 40 | 168 | 50% | 3205 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2917 | 50 | 124 | 56% | 2862 | 36% |
|  |  | E1 | 2817 | 36 | 236 | 48% | 2834 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3378 | 38 | 190 | 52% | 3335 | 60% |
|  |  | E1 | 3281 | 32 | 280 | 56% | 3204 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3191 | 33 | 294 | 58% | 3040 | 45% |
|  |  | P1 | 3294 | 42 | 174 | 56% | 3124 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2820 | 34 | 298 | 57% | 2585 | 36% |
|  |  | P1 | 2869 | 38 | 240 | 54% | 2697 | 35% |