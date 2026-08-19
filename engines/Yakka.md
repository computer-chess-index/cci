# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2757<sub>(+112) | 3020<sub>(+108) | 3102<sub>(+150) |  |
| 1.4 | 2025-11-11 | 2645 | 2912 | 2952 |  |
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

Generated: 2026-08-19 06:33:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5"]
  y-axis "Elo Rating" 2600 --> 3200
  line "STC (8.0+0.08s)" [2645, 2757]
  line "STC (8.0+0.08s)" [2645, 2757]
  line "LTC (60.0+0.60s)" [2912, 3020]
  line "VLTC (2m24s+1.12s)" [2952, 3102]
  line "VLTC (2m24s+1.12s)" [2952, 3102]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3102 | 22 | 560 | 49% | 3108 | 56% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3020 | 25 | 428 | 48% | 3038 | 55% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2757 | 23 | 596 | 50% | 2749 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2952 | 34 | 260 | 52% | 2935 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2912 | 30 | 336 | 56% | 2854 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2645 | 36 | 264 | 53% | 2607 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |