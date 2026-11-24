# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2777<sub>(+20) | 3129<sub>(-26) | 3258<sub>(+54) |  |
| 4.1.1 | 2026-11-02 | 2757<sub>(-4) | 3155<sub>(+28) | 3204<sub>(-10) |  |
| 4.1.0 | 2026-10-16 | 2761 | 3127 | 3214 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2796<sub>(+12) | 3112<sub>(+11) | 3206<sub>(+29) |  |
| 4.1.1 | 2026-11-02 | 2784<sub>(+48) | 3101<sub>(-22) | 3177<sub>(-23) |  |
| 4.1.0 | 2026-10-16 | 2736 | 3123 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2736 | 3123 | 3200 |  |
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

Generated: 2026-11-24 05:40:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2761, 2757, 2777]
  line "E1: LTC (60.0+0.60s)" [3127, 3155, 3129]
  line "E1: VLTC (2m24s+1.12s)" [3214, 3204, 3258]
  line "P1: STC (8.0+0.08s)" [2736, 2784, 2796]
  line "P1: LTC (60.0+0.60s)" [3123, 3101, 3112]
  line "P1: VLTC (2m24s+1.12s)" [3200, 3177, 3206]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3206 | 36 | 196 | 49% | 3213 | 68% |
|  |  | E1 | 3258 | 25 | 410 | 48% | 3271 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3112 | 36 | 204 | 47% | 3133 | 61% |
|  |  | E1 | 3129 | 31 | 274 | 50% | 3131 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2796 | 38 | 216 | 47% | 2822 | 39% |
|  |  | E1 | 2777 | 32 | 300 | 48% | 2780 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3177 | 36 | 212 | 50% | 3183 | 58% |
|  |  | E1 | 3204 | 33 | 248 | 50% | 3206 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3101 | 38 | 196 | 52% | 3085 | 52% |
|  |  | E1 | 3155 | 38 | 188 | 51% | 3144 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2784 | 43 | 174 | 52% | 2765 | 36% |
|  |  | E1 | 2757 | 34 | 268 | 49% | 2769 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3200 | 38 | 190 | 52% | 3159 | 60% |
|  |  | E1 | 3214 | 32 | 280 | 56% | 3137 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3123 | 42 | 174 | 56% | 2965 | 48% |
|  |  | E1 | 3127 | 33 | 294 | 58% | 2977 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2736 | 38 | 240 | 54% | 2576 | 35% |
|  |  | E1 | 2761 | 34 | 298 | 57% | 2530 | 36% |