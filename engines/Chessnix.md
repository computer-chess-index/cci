# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2882<sub>(+new) | 3143<sub>(+new) | 3235<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2871<sub>(+256) | 3069<sub>(+289) | 3168<sub>(+222) |  |
| 1.2 | 2025-12-12 | 2615<sub>(+281) | 2780<sub>(+173) | 2946<sub>(+262) |  |
| 1.0 | 2025-11-08 | 2334<sub>(+new) | 2607<sub>(+new) | 2684<sub>(+new) | too many irregular games |
| 0.1 | 2025-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:23:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2334, 2615, 2871, 2882]
  line "STC (8.0+0.08s)" [2334, 2615, 2871, 2882]
  line "LTC (60.0+0.60s)" [2607, 2780, 3069, 3143]
  line "VLTC (2m24s+1.12s)" [2684, 2946, 3168, 3235]
  line "VLTC (2m24s+1.12s)" [2684, 2946, 3168, 3235]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3235 | 41 | 160 | 53% | 3216 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 43 | 164 | 51% | 3133 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2882 | 44 | 156 | 49% | 2893 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 100 | 26 | 56% | 3127 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3069 | 75 | 52 | 46% | 3093 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2871 | 123 | 22 | 52% | 2849 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 158 | 12 | 46% | 2982 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 79 | 52 | 52% | 2763 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2615 | 149 | 16 | 63% | 2495 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2684 | 100 | 32 | 33% | 2827 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2607 | 145 | 16 | 41% | 2692 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2334 | 71 | 70 | 41% | 2410 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |