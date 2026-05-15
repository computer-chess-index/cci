# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2928<sub>(+new) | 3189<sub>(+new) | 3281<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2919<sub>(+257) | 3116<sub>(+289) | 3216<sub>(+226) |  |
| 1.2 | 2025-12-12 | 2662<sub>(+285) | 2827<sub>(+176) | 2990<sub>(+259) |  |
| 1.0 | 2025-11-08 | 2377<sub>(+new) | 2651<sub>(+new) | 2731<sub>(+new) | too many irregular games |
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

Generated: 2026-05-15 06:23:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2377, 2662, 2919, 2928]
  line "STC (8.0+0.08s)" [2377, 2662, 2919, 2928]
  line "LTC (60.0+0.60s)" [2651, 2827, 3116, 3189]
  line "VLTC (2m24s+1.12s)" [2731, 2990, 3216, 3281]
  line "VLTC (2m24s+1.12s)" [2731, 2990, 3216, 3281]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 41 | 160 | 53% | 3262 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3189 | 43 | 164 | 51% | 3179 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2928 | 44 | 156 | 49% | 2939 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3216 | 100 | 26 | 56% | 3174 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3116 | 75 | 52 | 46% | 3140 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2919 | 123 | 22 | 52% | 2896 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2990 | 158 | 12 | 46% | 3028 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2827 | 78 | 52 | 52% | 2809 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2662 | 149 | 16 | 63% | 2542 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2731 | 100 | 32 | 33% | 2874 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2651 | 145 | 16 | 41% | 2736 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2377 | 71 | 70 | 41% | 2453 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |