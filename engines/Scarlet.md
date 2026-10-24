# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2808<sub>(+686) | 3166<sub>(+704) | 3247<sub>(+664) |  |
| 1.0 | 2026-07-26 | 2122 | 2462 | 2583 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3011<sub>(+828) | 3236<sub>(+734) | 3317<sub>(+776) |  |
| 1.0 | 2026-07-26 | 2183 | 2502 | 2541 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-24 04:43:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2122, 2808]
  line "E1: LTC (60.0+0.60s)" [2462, 3166]
  line "E1: VLTC (2m24s+1.12s)" [2583, 3247]
  line "P1: STC (8.0+0.08s)" [2183, 3011]
  line "P1: LTC (60.0+0.60s)" [2502, 3236]
  line "P1: VLTC (2m24s+1.12s)" [2541, 3317]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3317 | 39 | 196 | 55% | 3255 | 47% |
|  |  | E1 | 3247 | 33 | 274 | 53% | 3209 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3236 | 42 | 176 | 56% | 3168 | 39% |
|  |  | E1 | 3166 | 34 | 268 | 51% | 3136 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3011 | 40 | 204 | 49% | 3000 | 35% |
|  |  | E1 | 2808 | 39 | 228 | 56% | 2736 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2541 | 44 | 194 | 45% | 2606 | 20% |
|  |  | E1 | 2583 | 39 | 238 | 48% | 2604 | 26% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2502 | 45 | 180 | 48% | 2541 | 22% |
|  |  | E1 | 2462 | 38 | 246 | 50% | 2453 | 26% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2183 | 44 | 184 | 49% | 2191 | 21% |
|  |  | E1 | 2122 | 36 | 276 | 47% | 2153 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |