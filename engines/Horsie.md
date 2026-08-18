# Engine: Horsie

Author: Liam McGuire

Home: https://github.com/liamt19/Horsie

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-05-13 | 3344<sub>(+15) | 3492<sub>(+13) | 3524<sub>(-5) |  |
| 1.0 | 2025-01-08 | 3329 | 3479 | 3529 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Horsie+<version>&body=###%20Engine%20name%0AHorsie%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:25:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3329, 3344]
  line "STC (8.0+0.08s)" [3329, 3344]
  line "LTC (60.0+0.60s)" [3479, 3492]
  line "VLTC (2m24s+1.12s)" [3529, 3524]
  line "VLTC (2m24s+1.12s)" [3529, 3524]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3524 | 16 | 906 | 50% | 3524 | 86% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 16 | 898 | 51% | 3488 | 83% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3344 | 16 | 1046 | 50% | 3347 | 69% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3529 | 28 | 304 | 49% | 3534 | 86% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3479 | 26 | 348 | 51% | 3471 | 85% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3329 | 29 | 292 | 49% | 3335 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |