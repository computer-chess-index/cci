# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.1 | 2026-11-02 | 2838<sub>(+18) | 3202<sub>(+11) | 3279<sub>(0) |  |
| 4.1.0 | 2026-10-16 | 2820 | 3191 | 3279 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.1 | 2026-11-02 | 2962<sub>(+39) | 3301<sub>(-46) | 3398<sub>(-32) |  |
| 4.1.0 | 2026-10-16 | 2923 | 3347 | 3430 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2923 | 3347 | 3430 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LunaChessEngine+<version>&body=###%20Engine%20name%0ALunaChessEngine%0A%0A###%20Version%0A4.1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-05 05:39:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2820, 2838]
  line "E1: LTC (60.0+0.60s)" [3191, 3202]
  line "E1: VLTC (2m24s+1.12s)" [3279, 3279]
  line "P1: STC (8.0+0.08s)" [2923, 2962]
  line "P1: LTC (60.0+0.60s)" [3347, 3301]
  line "P1: VLTC (2m24s+1.12s)" [3430, 3398]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3398 | 57 | 82 | 51% | 3395 | 60% |
|  |  | E1 | 3279 | 53 | 92 | 51% | 3271 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3301 | 59 | 82 | 55% | 3259 | 48% |
|  |  | E1 | 3202 | 46 | 126 | 50% | 3201 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2962 | 61 | 88 | 57% | 2894 | 33% |
|  |  | E1 | 2838 | 57 | 92 | 50% | 2836 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3279 | 32 | 280 | 56% | 3202 | 55% |
|  |  | P1 | 3430 | 38 | 190 | 52% | 3387 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3347 | 42 | 174 | 56% | 3177 | 48% |
|  |  | E1 | 3191 | 33 | 294 | 58% | 3040 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2923 | 38 | 240 | 54% | 2750 | 35% |
|  |  | E1 | 2820 | 34 | 298 | 57% | 2585 | 36% |