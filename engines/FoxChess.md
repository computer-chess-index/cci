# Engine: FoxChess

Author: Nathan Faltermeier

Home: https://github.com/nfaltermeier/fox-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2 | 2026-06-20 | 2530<sub>(+130) | 2838<sub>(+127) | 2944<sub>(+164) |  |
| 1.1 | 2026-04-18 | 2400<sub>(+81) | 2711<sub>(+177) | 2780<sub>(+129) |  |
| 1.0 | 2025-12-27 | 2319 | 2534 | 2651 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+FoxChess+<version>&body=###%20Engine%20name%0AFoxChess%0A%0A###%20Version%0A1.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-15 04:38:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1", "1.2"]
  y-axis "Elo Rating" 2300 --> 3000
  line "" [2319, 2400, 2530]
  line "STC (8.0+0.08s)" [2319, 2400, 2530]
  line "LTC (60.0+0.60s)" [2534, 2711, 2838]
  line "" [2651, 2780, 2944]
  line "VLTC (2m24s+1.12s)" [2651, 2780, 2944]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2944 | 30 | 320 | 51% | 2936 | 48% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2838 | 32 | 318 | 50% | 2844 | 36% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2530 | 31 | 344 | 50% | 2533 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2780 | 28 | 392 | 49% | 2785 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2711 | 28 | 418 | 50% | 2705 | 34% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2400 | 29 | 408 | 50% | 2396 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2651 | 28 | 396 | 49% | 2657 | 40% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2534 | 31 | 328 | 52% | 2515 | 37% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2319 | 27 | 480 | 50% | 2315 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |