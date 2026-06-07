# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2754<sub>(+112) | 3019<sub>(+112) | 3097<sub>(+151) |  |
| 1.4 | 2025-11-11 | 2642<sub>(+new) | 2907<sub>(+new) | 2946<sub>(+new) |  |
| 1.3 | 2025-08-10 |  |  |  |  |
| 1.2 | 2025-02-11 |  |  |  |  |
| 1.1 | 2024-09-16 |  |  |  |  |
| 1.0 | 2024-04-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Yakka+<version>&body=###%20Engine%20name%0AYakka%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-07 06:29:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5"]
  y-axis "Elo Rating" 2600 --> 3100
  line "STC (8.0+0.08s)" [2642, 2754]
  line "STC (8.0+0.08s)" [2642, 2754]
  line "LTC (60.0+0.60s)" [2907, 3019]
  line "VLTC (2m24s+1.12s)" [2946, 3097]
  line "VLTC (2m24s+1.12s)" [2946, 3097]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3097 | 24 | 492 | 49% | 3104 | 54% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3019 | 27 | 372 | 48% | 3033 | 56% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2754 | 26 | 442 | 50% | 2755 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 34 | 260 | 52% | 2930 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2907 | 30 | 336 | 56% | 2849 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2642 | 36 | 264 | 53% | 2606 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |