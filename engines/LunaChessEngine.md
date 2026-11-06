# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2847<sub>(+20) | 3206<sub>(-14) | 3376<sub>(+97) |  |
| 4.1.1 | 2026-11-02 | 2827<sub>(-3) | 3220<sub>(+18) | 3279<sub>(-11) |  |
| 4.1.0 | 2026-10-16 | 2830 | 3202 | 3290 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2973<sub>(+14) | 3329<sub>(+11) | 3428<sub>(+15) |  |
| 4.1.1 | 2026-11-02 | 2959<sub>(+42) | 3318<sub>(-23) | 3413<sub>(-12) |  |
| 4.1.0 | 2026-10-16 | 2917 | 3341 | 3425 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2917 | 3341 | 3425 |  |
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

Generated: 2026-11-06 05:39:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2830, 2827, 2847]
  line "E1: LTC (60.0+0.60s)" [3202, 3220, 3206]
  line "E1: VLTC (2m24s+1.12s)" [3290, 3279, 3376]
  line "P1: STC (8.0+0.08s)" [2917, 2959, 2973]
  line "P1: LTC (60.0+0.60s)" [3341, 3318, 3329]
  line "P1: VLTC (2m24s+1.12s)" [3425, 3413, 3428]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3428 | 51 | 100 | 48% | 3445 | 65% |
|  |  | E1 | 3376 | 38 | 180 | 53% | 3355 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3329 | 53 | 92 | 45% | 3364 | 62% |
|  |  | E1 | 3206 | 40 | 168 | 51% | 3197 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2973 | 56 | 96 | 44% | 3025 | 40% |
|  |  | E1 | 2847 | 39 | 196 | 48% | 2861 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3279 | 34 | 232 | 49% | 3285 | 58% |
|  |  | P1 | 3413 | 38 | 188 | 52% | 3398 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3220 | 40 | 168 | 50% | 3216 | 59% |
|  |  | P1 | 3318 | 44 | 150 | 55% | 3279 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2959 | 54 | 112 | 56% | 2904 | 34% |
|  |  | E1 | 2827 | 36 | 236 | 48% | 2843 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3425 | 38 | 190 | 52% | 3382 | 60% |
|  |  | E1 | 3290 | 32 | 280 | 56% | 3213 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3341 | 42 | 174 | 56% | 3171 | 48% |
|  |  | E1 | 3202 | 33 | 294 | 58% | 3050 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2917 | 38 | 240 | 54% | 2743 | 35% |
|  |  | E1 | 2830 | 34 | 298 | 57% | 2595 | 36% |