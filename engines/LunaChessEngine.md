# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2862<sub>(+26) | 3220<sub>(-9) | 3370<sub>(+81) |  |
| 4.1.1 | 2026-11-02 | 2836<sub>(-3) | 3229<sub>(+17) | 3289<sub>(-10) |  |
| 4.1.0 | 2026-10-16 | 2839 | 3212 | 3299 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2979<sub>(+14) | 3345<sub>(+27) | 3429<sub>(+16) |  |
| 4.1.1 | 2026-11-02 | 2965<sub>(+49) | 3318<sub>(-25) | 3413<sub>(-12) |  |
| 4.1.0 | 2026-10-16 | 2916 | 3343 | 3425 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2916 | 3343 | 3425 |  |
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

Generated: 2026-11-07 05:39:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2839, 2836, 2862]
  line "E1: LTC (60.0+0.60s)" [3212, 3229, 3220]
  line "E1: VLTC (2m24s+1.12s)" [3299, 3289, 3370]
  line "P1: STC (8.0+0.08s)" [2916, 2965, 2979]
  line "P1: LTC (60.0+0.60s)" [3343, 3318, 3345]
  line "P1: VLTC (2m24s+1.12s)" [3425, 3413, 3429]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3429 | 44 | 132 | 48% | 3441 | 69% |
|  |  | E1 | 3370 | 32 | 248 | 50% | 3366 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3220 | 38 | 188 | 51% | 3209 | 61% |
|  |  | P1 | 3345 | 45 | 128 | 48% | 3357 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2862 | 37 | 218 | 49% | 2869 | 40% |
|  |  | P1 | 2979 | 46 | 144 | 47% | 3009 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3413 | 38 | 188 | 52% | 3399 | 59% |
|  |  | E1 | 3289 | 34 | 232 | 49% | 3294 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3318 | 43 | 158 | 55% | 3281 | 46% |
|  |  | E1 | 3229 | 40 | 168 | 50% | 3225 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2965 | 50 | 124 | 56% | 2911 | 36% |
|  |  | E1 | 2836 | 36 | 236 | 48% | 2853 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3425 | 38 | 190 | 52% | 3382 | 60% |
|  |  | E1 | 3299 | 32 | 280 | 56% | 3222 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3343 | 42 | 174 | 56% | 3171 | 48% |
|  |  | E1 | 3212 | 33 | 294 | 58% | 3059 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2916 | 38 | 240 | 54% | 2743 | 35% |
|  |  | E1 | 2839 | 34 | 298 | 57% | 2603 | 36% |