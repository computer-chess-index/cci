# Engine: Dorky

Author: Matt KcKnight

Home: https://github.com/matt-dot-net/dorky-release

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-08-21 | 2307<sub>(+71) | 2634<sub>(+131) | 2749<sub>(+112) |  |
| 5.0 | 2026-08-08 | 2236 | 2503 | 2637 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dorky+<version>&body=###%20Engine%20name%0ADorky%0A%0A###%20Version%0A5.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:24:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "5.1"]
  y-axis "Elo Rating" 2200 --> 2800
  line "STC (8.0+0.08s)" [2236, 2307]
  line "STC (8.0+0.08s)" [2236, 2307]
  line "LTC (60.0+0.60s)" [2503, 2634]
  line "VLTC (2m24s+1.12s)" [2637, 2749]
  line "VLTC (2m24s+1.12s)" [2637, 2749]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2749 | 35 | 248 | 53% | 2719 | 39% |
| 5.1 | LTC <sub>(60.0+0.60s)</sub> | 2634 | 38 | 228 | 53% | 2604 | 30% |
| 5.1 | STC <sub>(8.0+0.08s)</sub> | 2307 | 46 | 152 | 50% | 2303 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2637 | 34 | 298 | 48% | 2658 | 27% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2503 | 37 | 246 | 50% | 2469 | 29% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2236 | 32 | 336 | 50% | 2221 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |