# Engine: ElephantGambit

Author: Ek Alexander Loodin

Home: https://github.com/looak/elephant

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2402<sub>(+142) | 2747<sub>(+175) | 2812<sub>(+170) |  |
| 1.0.0 | 2026-10-14 | 2260<sub>(-16) | 2572<sub>(+65) | 2642<sub>(+5) |  |
| 0.15.2 | 2026-10-11 | 2276<sub>(+1434) | 2507<sub>(+new) | 2637<sub>(+29) |  |
| 0.15.1 | 2026-10-11 | 842 |  | 2608 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-10-25 | 2437<sub>(+269) | 2731<sub>(+262) | 2786<sub>(+179) |  |
| 1.0.0 | 2026-10-14 | 2168<sub>(-53) | 2469<sub>(-92) | 2607<sub>(+85) |  |
| 0.15.2 | 2026-10-11 | 2221 | 2561 | 2522 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.15.2 | 2026-10-11 | 2221 | 2561 | 2522 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ElephantGambit+<version>&body=###%20Engine%20name%0AElephantGambit%0A%0A###%20Version%0A1.3.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:38:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.15.2", "1.0.0", "1.3.2"]
  y-axis "Elo Rating" 2100 --> 2900
  line "E1: STC (8.0+0.08s)" [2276, 2260, 2402]
  line "E1: LTC (60.0+0.60s)" [2507, 2572, 2747]
  line "E1: VLTC (2m24s+1.12s)" [2637, 2642, 2812]
  line "P1: STC (8.0+0.08s)" [2221, 2168, 2437]
  line "P1: LTC (60.0+0.60s)" [2561, 2469, 2731]
  line "P1: VLTC (2m24s+1.12s)" [2522, 2607, 2786]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2786 | 38 | 220 | 48% | 2809 | 39% |
|  |  | E1 | 2812 | 32 | 324 | 53% | 2785 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2731 | 42 | 184 | 48% | 2753 | 35% |
|  |  | E1 | 2747 | 32 | 320 | 48% | 2758 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2437 | 43 | 184 | 50% | 2438 | 26% |
|  |  | E1 | 2402 | 37 | 236 | 50% | 2391 | 32% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2642 | 40 | 220 | 50% | 2638 | 25% |
|  |  | P1 | 2607 | 43 | 184 | 52% | 2595 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2572 | 39 | 232 | 49% | 2570 | 25% |
|  |  | P1 | 2469 | 46 | 162 | 51% | 2484 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2260 | 39 | 240 | 50% | 2250 | 21% |
|  |  | P1 | 2168 | 45 | 172 | 54% | 2142 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2522 | 64 | 82 | 53% | 2489 | 28% |
|  |  | E1 | 2637 | 50 | 132 | 49% | 2647 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2561 | 58 | 104 | 55% | 2502 | 28% |
|  |  | E1 | 2507 | 52 | 122 | 51% | 2488 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2221 | 64 | 90 | 55% | 2161 | 17% |
|  |  | E1 | 2276 | 49 | 156 | 55% | 2160 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.15.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2608 | 87 | 48 | 51% | 2587 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1729 | 330 | 16 | 100% | 698 | 0% |
|  |  | E1 | 842 | 342 | 6 | 100% | 270 | 0% |