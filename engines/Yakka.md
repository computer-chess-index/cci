# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2749<sub>(+110) | 3016<sub>(+112) | 3094<sub>(+151) |  |
| 1.4 | 2025-11-11 | 2639<sub>(+new) | 2904<sub>(+new) | 2943<sub>(+new) |  |
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

Generated: 2026-06-08 06:29:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5"]
  y-axis "Elo Rating" 2600 --> 3100
  line "STC (8.0+0.08s)" [2639, 2749]
  line "STC (8.0+0.08s)" [2639, 2749]
  line "LTC (60.0+0.60s)" [2904, 3016]
  line "VLTC (2m24s+1.12s)" [2943, 3094]
  line "VLTC (2m24s+1.12s)" [2943, 3094]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3094 | 24 | 492 | 49% | 3100 | 54% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3016 | 27 | 372 | 48% | 3029 | 56% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2749 | 26 | 446 | 50% | 2753 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2943 | 34 | 260 | 52% | 2927 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2904 | 30 | 336 | 56% | 2846 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2639 | 36 | 264 | 53% | 2603 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |