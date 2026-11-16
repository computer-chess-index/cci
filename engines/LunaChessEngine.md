# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2777<sub>(+19) | 3137<sub>(-21) | 3264<sub>(+56) |  |
| 4.1.1 | 2026-11-02 | 2758<sub>(-5) | 3158<sub>(+27) | 3208<sub>(-10) |  |
| 4.1.0 | 2026-10-16 | 2763 | 3131 | 3218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2766<sub>(+12) | 3086<sub>(+12) | 3179<sub>(+25) |  |
| 4.1.1 | 2026-11-02 | 2754<sub>(+46) | 3074<sub>(-19) | 3154<sub>(-20) |  |
| 4.1.0 | 2026-10-16 | 2708 | 3093 | 3174 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2708 | 3093 | 3174 |  |
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

Generated: 2026-11-16 05:39:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2763, 2758, 2777]
  line "E1: LTC (60.0+0.60s)" [3131, 3158, 3137]
  line "E1: VLTC (2m24s+1.12s)" [3218, 3208, 3264]
  line "P1: STC (8.0+0.08s)" [2708, 2754, 2766]
  line "P1: LTC (60.0+0.60s)" [3093, 3074, 3086]
  line "P1: VLTC (2m24s+1.12s)" [3174, 3154, 3179]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3179 | 37 | 188 | 49% | 3186 | 69% |
|  |  | E1 | 3264 | 26 | 388 | 49% | 3274 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3086 | 39 | 172 | 47% | 3105 | 61% |
|  |  | E1 | 3137 | 32 | 258 | 50% | 3136 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2766 | 41 | 184 | 47% | 2793 | 40% |
|  |  | E1 | 2777 | 34 | 272 | 47% | 2782 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3154 | 36 | 208 | 50% | 3152 | 59% |
|  |  | E1 | 3208 | 33 | 248 | 50% | 3209 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3074 | 41 | 176 | 53% | 3051 | 48% |
|  |  | E1 | 3158 | 38 | 184 | 51% | 3148 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2758 | 35 | 256 | 48% | 2772 | 36% |
|  |  | P1 | 2754 | 44 | 166 | 52% | 2735 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3174 | 38 | 190 | 52% | 3133 | 60% |
|  |  | E1 | 3218 | 32 | 280 | 56% | 3141 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3093 | 42 | 174 | 56% | 2938 | 48% |
|  |  | E1 | 3131 | 33 | 294 | 58% | 2981 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2708 | 38 | 240 | 54% | 2549 | 35% |
|  |  | E1 | 2763 | 34 | 298 | 57% | 2534 | 36% |